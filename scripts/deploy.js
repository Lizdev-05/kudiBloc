const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Replace with the actual constructor arguments if needed
  const initialSupply = hre.ethers.parseEther("0.001"); // 100 million tokens

  // Deploy the MyERC20Token contract
  const MyERC20Token = await hre.ethers.getContractFactory("MyERC20Token");
  const token = await MyERC20Token.deploy();

  await token.waitForDeployment();

  console.log("MyERC20Token deployed to:", token.target);
  console.log("Deployed by:", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
