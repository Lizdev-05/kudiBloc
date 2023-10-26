require("@nomicfoundation/hardhat-toolbox");
const INFURA_API_KEY = "c94784d611cb4ab1b1a7f4130246ef4d";
const SEPOLIA_PRIVATE_KEY =
  "2250683669182637c733b8cda33fde00a0fcd6ef4c6b526f3acf081f3e2f40fa";

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.0", // Match the Solidity version in your contract
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
