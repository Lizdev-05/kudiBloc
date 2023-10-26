require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.0", // Match the Solidity version in your contract
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
  },
};
