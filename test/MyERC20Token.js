const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyERC20Token", function () {
  let MyERC20Token;
  let myERC20Token;
  let owner;
  let user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    MyERC20Token = await ethers.getContractFactory("MyERC20Token");
    myERC20Token = await MyERC20Token.deploy();
  });

  it("Should have the correct name, symbol, and decimals", async function () {
    expect(await myERC20Token.name()).to.equal("mockeCedi");
    expect(await myERC20Token.symbol()).to.equal("mockecedi");
    expect(await myERC20Token.decimals()).to.equal(18);
  });
  it("Should have the correct initial total supply", async function () {
    const totalSupply = await myERC20Token.totalSupply();
    expect(totalSupply).to.equal(BigInt("100000000000000000000000000"));
  });

  it("Should transfer tokens between accounts", async function () {
    const initialBalanceOwner = await myERC20Token.balanceOf(owner.address);
    const transferAmount = BigInt(1000);
    await myERC20Token.transfer(user.address, transferAmount);

    const finalBalanceOwner = await myERC20Token.balanceOf(owner.address);
    const finalBalanceUser = await myERC20Token.balanceOf(user.address);

    expect(finalBalanceOwner).to.equal(initialBalanceOwner - transferAmount);
    expect(finalBalanceUser).to.equal(transferAmount);
  });

  it("It should approve and transfer from token", async function () {
    const initialAllowance = 1000;
    await myERC20Token.approve(user.address, initialAllowance);
    const transferAmount = 100;
    await myERC20Token
      .connect(user)
      .transferFrom(owner.address, user.address, transferAmount);
  });

  it("Should revert when transferring more tokens than the balance", async function () {
    const initialBalanceOwner = await myERC20Token.balanceOf(owner.address);
    const transferAmount = BigInt(initialBalanceOwner) + BigInt(1);

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
