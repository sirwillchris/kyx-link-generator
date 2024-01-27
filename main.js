const request = require("request");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const links = 1; // Mention the Number of Link you want here in Numbers

// Replace 'YOUR_API_ID' and 'YOUR_API_SECRET' with your actual API ID and Secret from Jumio Portal
const apiId = "YOUR_API_ID";
const apiSecret = "YOUR_API_SECRET";

const options = {
  method: "POST",
  url: "https://account.amer-1.jumio.ai/api/v1/accounts/", // For US

  // url: 'https://account.emea-1.jumio.ai/api/v1/accounts', // For EU
  // url: 'https://account.apac-1.jumio.ai/api/v1/accounts' // For SG
  headers: {
    Accept: "*/*",
    "User-Agent": "Type you User Reference here", // Use any identifiers as per your choice
    Authorization: `Basic ${Buffer.from(`${apiId}:${apiSecret}`).toString(
      "base64"
    )}`,
    "Content-Type": "application/json",
  },
  body: {
    customerInternalReference: "Internal Reference",
    workflowDefinition: { key: 10015 }, // Workflow Key Here
  },
  json: true,
};

const jsonData = [];

function makeRequest() {
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else if (response.statusCode !== 200) {
        reject(
          new Error(`Request failed with status code ${response.statusCode}`)
        );
      } else {
        resolve(body);
      }
    });
  });
}

console.log(makeRequest());

async function makeRequests() {
  try {
    for (var i = 1; i <= links; i++) {
      const fetchData = await makeRequest();
      const data = {
        url: fetchData.web.href,
        account_id: fetchData.account.id,
      };
      jsonData.push(data);
    }
    console.log("All requests completed");

    const csvWriter = createCsvWriter({
      path: "output.csv",
      header: [
        { id: "url", title: "URL" },
        { id: "account_id", title: "Account ID" },
      ],
    });

    csvWriter
      .writeRecords(jsonData)
      .then(() => console.log("CSV file has been written successfully"))
      .catch((error) => console.error("Error writing CSV file:", error));
  } catch (error) {
    console.error("Error in requests:", error);
  }
}

makeRequests();
