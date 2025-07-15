# Jumio KYX Link Generator

**Jumio KYX Link Generator** is a simple and interactive CLI tool that helps you bulk-generate KYX Verification links using your Jumio API credentials — right from your terminal.

---

## 🚀 Quick Start (via NPX – No Install)

```bash
npx kyx-link-generator
```

You'll be prompted to enter:

- ✅ Your **Jumio API ID**
- ✅ Your **Jumio API Secret**
- ✅ Number of links to generate
- ✅ Region (US, EU, or APAC)
- ✅ Customer name (used for reference tags)
- ✅ Workflow Key (default: 10011 for ID + Identity Verification)

Once complete, a file named `output.csv` will be generated with all the KYX links and Account IDs.

---

## 🧪 Sample Output

```csv
URL,Account ID
https://account.amer-1.jumio.ai/...xyz,23a84d32-...
https://account.amer-1.jumio.ai/...abc,59bf2c6a-...
https://account.amer-1.jumio.ai/...pqr,81f7b23b-...
```

---

## 📦 Install Globally (Optional)

```bash
npm install -g kyx-link-generator
kyx-link-generator
```

---

## 📁 Output

The script generates an `output.csv` file in the current directory with:

- The **KYX Link**
- The **Account ID** associated with each link

---

## 🔧 Requirements

- [Node.js](https://nodejs.org/) v14 or higher
- Jumio KYX API credentials (from the [Jumio Portal](https://portal.jumio.com))

---

## 👨‍💼 Author

Made with ❤️ by **William Christopher (Jumio)**

---

## 💬 Support

Need help or want to request a feature?

👉 [Open an issue on GitHub](https://github.com/sirwillchris/kyx-link-generator/issues)

---

## 🔐 Disclaimer

This CLI uses your Jumio API credentials securely to generate links. Credentials are never stored or shared.

