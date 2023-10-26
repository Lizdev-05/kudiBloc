const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyERC20Token", function () {
  let myERC20Token;
  let owner;
  let user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const MyERC20Token = await ethers.getContractFactory("MyERC20Token");
    myERC20Token = await MyERC20Token.deploy();
    await myERC20Token.deployed();
  });

  it("Should have the correct name, symbol, and decimals", async function () {
    expect(await myERC20Token.name()).to.equal("eCedis");
    expect(await myERC20Token.symbol()).to.equal("ecedis");
    expect(await myERC20Token.decimals()).to.equal(18);
  });

  it("Should have the correct initial total supply", async function () {
    const totalSupply = await myERC20Token.totalSupply();
    expect(totalSupply).to.equal(100000000 * 10 ** 18);
  });

  it("Should transfer tokens between accounts", async function () {
    const initialBalanceOwner = await myERC20Token.balanceOf(owner.address);
    const transferAmount = 1000;
    await myERC20Token.transfer(user.address, transferAmount);

    const finalBalanceOwner = await myERC20Token.balanceOf(owner.address);
    const finalBalanceUser = await myERC20Token.balanceOf(user.address);

    expect(finalBalanceOwner).to.equal(initialBalanceOwner - transferAmount);
    expect(finalBalanceUser).to.equal(transferAmount);
  });

  it("Should approve and transferFrom tokens", async function () {
    const transferAmount = 1000;
    await myERC20Token.approve(user.address, transferAmount);
    await myERC20Token
      .connect(user)
      .transferFrom(owner.address, user.address, transferAmount);

    const finalBalanceOwner = await myERC20Token.balanceOf(owner.address);
    const finalBalanceUser = await myERC20Token.balanceOf(user.address);

    expect(finalBalanceOwner).to.equal(0);
    expect(finalBalanceUser).to.equal(transferAmount);
  });

  it("Should revert when transferring more tokens than the balance", async function () {
    const initialBalanceOwner = await myERC20Token.balanceOf(owner.address);
    const transferAmount = initialBalanceOwner + 1;

    await expect(
      myERC20Token.transfer(user.address, transferAmount)
    ).to.be.revertedWith("Insufficient balance");
  });

  it("Should revert when transferring more tokens than allowed", async function () {
    const initialAllowance = 1000;
    await myERC20Token.approve(user.address, initialAllowance);
    const transferAmount = initialAllowance + 1;

    await expect(
      myERC20Token
        .connect(user)
        .transferFrom(owner.address, user.address, transferAmount)
    ).to.be.revertedWith("Insufficient allowance");
  });
});
