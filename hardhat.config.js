require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: './.env.local' });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
})

const NEXT_PUBLIC_RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/nc30rgX-LWEyP2TWKcnxXkXpK59j1eaX";
// const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
const privateKey = "18427316d04802297e41a337e710495fcd65045fc9c8398dd21ca63ea00dc56a";

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "amoy",
  networks: {
    // mumbai: {},
    mumbai: {
      // url: process.env.NEXT_PUBLIC_RPC_URL,
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [privateKey]
    },
    amoy:{
      url: "https://polygon-amoy.g.alchemy.com/v2/lATXub9ULMSqZA6JBO9AIygQtq9EWIP8",
      accounts: ["18427316d04802297e41a337e710495fcd65045fc9c8398dd21ca63ea00dc56a"]
    },
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/rwRKz2tvkvry7qW2enrNS32nNZll5kzh",
      chainId:11155111,
      accounts: [privateKey]
    },
    
    localhost:{}
  }
  // namedAccounts: {
  //   deployer: {
  //     default: 0, // here this will by default take the first account as deployer
  //   },
  // },
};

