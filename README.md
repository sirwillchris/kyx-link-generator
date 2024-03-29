# Jumio KYX Link Generator

Jumio KYX Link Generator is a simple, flexible node based bulk links generator for Jumio KYX Platform.

## 📦 Installation

To install the Jumio KYX Link Generator follow any of the following methods

A - Git  

Open up terminal and type `git clone https://github.com/sirwillchris/kyx-link-generator.git` and access the main.js 

B - NPM
In an blank project run 'npm i kyx-link-generator' and navigate to `node_modules > kyx-link-generator > main.js`


## 🚀 Usage

To get started, edit the `main.js` file located inside the kyx-link-generator folder of this project and set the `links` to your desired number eg. 10. 20,30,100 etc.

Uncomment the preferred URL Region for Account Creation

- - `eu` for Europe
  - `us` for United States
  - `sgp` for Singapore
- Set `API Key and API Secret` with your API credentials from the Jumio Portal

Remember, correctly setting up the correct region and API credentials is crucial for your instance of the Jumio KYX Link Generator to run properly.

Once the above configuration is done, run the command

```bash
npm start
```

make sure you are in the `kyx-link-generator` folder, If not 
```bash
cd kyx-link-generator
```

Once you have added all required details in the `main.js` file,

Run
```bash
npm start
```

## ❌ Error

If you see errors like `ENOENT: no such file or directory,`

make sure you are in the correct directory `kyx-link-generator`, If not 
```bash
cd kyx-link-generator
npm start
```

_Please note that [Node.js](https://nodejs.org) must be installed on your machine to run this command. If not installed, download it from the official [Node.js website](https://nodejs.org)._

## 👨🏼‍💻 Output

Once the script is successfully executed you can see the output.csv file with the generated links in your project directory. Use these links in your iframe or web redirects.

## ❓ Need Help?

We understand you may have questions or encounter issues along the way. Don't worry! Our dedicated support team is always ready to assist. Feel free to reach out to us for any help you need to make the most of Jumio KYX Link Generator.

We wish you a fantastic coding journey! 🚀
