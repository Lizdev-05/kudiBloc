const { ethers } = require("hardhat");

async function deployMyERC20Token() {
  // Get the first (default) Ethereum account as the deployer
  const [deployer] = await ethers.getSigners();

  // Replace with the actual constructor arguments if needed
  const initialSupply = ethers.utils.parseUnits("100000000", 18); // 100 million tokens

  // Deploy the MyERC20Token contract
  const MyERC20Token = await ethers.getContractFactory("MyERC20Token");
  const token = await MyERC20Token.deploy(initialSupply);

  await token.deployed();

  console.log("MyERC20Token deployed to:", token.address);
  console.log("Deployed by:", deployer.address);
}

deployMyERC20Token()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
