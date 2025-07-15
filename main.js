#!/usr/bin/env node

const axios = require("axios");
const prompt = require("prompt-sync")();
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// --------------------
// Interactive CLI
// --------------------
const apiId = prompt("Enter your Jumio API ID: ");
const apiSecret = prompt("Enter your Jumio API Secret: ");
const links = parseInt(prompt("How many links do you want to generate? "), 10);

// Region selection
console.log("Select the Data Center:");
console.log("1. US");
console.log("2. EU");
console.log("3. APAC");

const regionChoice = prompt("Enter 1, 2, or 3: ");
let url;

switch (regionChoice) {
  case "1":
    url = "https://account.amer-1.jumio.ai/api/v1/accounts";
    break;
  case "2":
    url = "https://account.emea-1.jumio.ai/api/v1/accounts";
    break;
  case "3":
    url = "https://account.apac-1.jumio.ai/api/v1/accounts";
    break;
  default:
    console.error("❌ Invalid region selected.");
    process.exit(1);
}

const customerName = prompt("Enter Customer Name (used for reference tag): ");
const workflowKeyInput = prompt("Enter Workflow Key (default: 10011 for ID + Identity Verification): ");
const workflowKey = workflowKeyInput.trim() === "" ? 10011 : parseInt(workflowKeyInput, 10);

const headers = {
  Accept: "*/*",
  "User-Agent": "KYX-Link-Gen",
  Authorization: `Basic ${Buffer.from(`${apiId}:${apiSecret}`).toString("base64")}`,
  "Content-Type": "application/json",
};

const jsonData = [];

async function makeRequest(i) {
  const timestamp = Date.now();
  const customerRef = `${customerName}-Ref-${timestamp}-${i}`;

  const body = {
    customerInternalReference: customerRef,
    workflowDefinition: { key: workflowKey },
  };

  try {
    const response = await axios.post(url, body, { headers });
    return { ...response.data, ref: customerRef };
  } catch (error) {
    if (error.response) {
      throw new Error(`Request failed with status code ${error.response.status}`);
    } else {
      throw error;
    }
  }
}

async function makeRequests() {
  try {
    for (let i = 1; i <= links; i++) {
      const fetchData = await makeRequest(i);
      const data = {
        url: fetchData.web.href,
        account_id: fetchData.account.id,
        reference: fetchData.ref,
      };
      jsonData.push(data);
    }

    const csvWriter = createCsvWriter({
      path: "output.csv",
      header: [
        { id: "url", title: "URL" },
        { id: "account_id", title: "Account ID" },
        { id: "reference", title: "Customer Ref" },
      ],
    });

    await csvWriter.writeRecords(jsonData);
    console.log("✅ CSV file has been written successfully: output.csv");
  } catch (error) {
    console.error("❌ Error in requests:", error.message || error);
  }
}

makeRequests();
