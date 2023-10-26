// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("ApplyForLoanContract", function () {
//   let ApplyForLoanContract;
//   let applyForLoanContract;
//   let owner;
//   let user;
//   let vendor1;
//   let vendor2;

//   beforeEach(async function () {
//     [owner, user, vendor1, vendor2] = await ethers.getSigners();
//     ApplyForLoanContract = await ethers.getContractFactory(
//       "ApplyForLoanContract"
//     );
//     applyForLoanContract = await ApplyForLoanContract.deploy();
//   });

//   it("Should apply for a loan", async function () {
//     await applyForLoanContract.applyForLoan("John Doe", 100000, [
//       vendor1.address,
//     ]);

//     const loanApplicationCount = await applyForLoanContract.loanApplications
//       .length;
//     const loanApplication = await applyForLoanContract.loanApplications(
//       loanApplicationCount - 1
//     );

//     expect(loanApplication.name).to.equal("John Doe");
//     expect(loanApplication.loanAmount).to.equal(100000);
//     expect(loanApplication.vendorList[0]).to.equal(vendor1.address);
//   });
// });

// describe("DisburseLoanContract", function () {
//   let DisburseLoanContract;
//   let disburseLoanContract;
//   let mockeCediToken;
//   let kudiBloc;
//   let user;

//   beforeEach(async function () {
//     [user, kudiBloc] = await ethers.getSigners();

//     // Deploy MyERC20Token and link it to the DisburseLoanContract
//     const MyERC20Token = await ethers.getContractFactory("MyERC20Token");
//     await mockeCediToken.connect(owner).transfer(user.address, 1000);

//     await mockeCediToken
//       .connect(user)
//       .transfer(disburseLoanContract.address, 1000000);

//     DisburseLoanContract = await ethers.getContractFactory(
//       "DisburseLoanContract"
//     );
//     disburseLoanContract = await DisburseLoanContract.deploy(
//       mockeCediToken.address
//     );
//   });

//   it("Should disburse mockeCedi to KudiBloc", async function () {
//     await disburseLoanContract.disburseToKudiBloc(kudiBloc.address, 5000);
//     const kudiBlocBalance = await mockeCediToken.balanceOf(kudiBloc.address);
//     expect(kudiBlocBalance).to.equal(5000);
//   });
// });

// describe("KudiBlocContract", function () {
//   let KudiBlocContract;
//   let kudiBlocContract;
//   let mockeCediToken;
//   let applyForLoanContract;
//   let disburseLoanContract;
//   let owner;
//   let user;
//   let vendor1;
//   let vendor2;

//   beforeEach(async function () {
//     [owner, user, vendor1, vendor2] = await ethers.getSigners();

//     // Deploy MyERC20Token and link it to the KudiBlocContract
//     const MyERC20Token = await ethers.getContractFactory("MyERC20Token");
//     mockeCediToken = await MyERC20Token.deploy();
//     await mockeCediToken.connect(owner).transfer(user.address, 1000);

//     const ApplyForLoanContract = await ethers.getContractFactory(
//       "ApplyForLoanContract"
//     );
//     applyForLoanContract = await ApplyForLoanContract.deploy();

//     const DisburseLoanContract = await ethers.getContractFactory(
//       "DisburseLoanContract"
//     );
//     disburseLoanContract = await DisburseLoanContract.deploy(
//       mockeCediToken.address
//     );

//     KudiBlocContract = await ethers.getContractFactory("KudiBlocContract");
//     kudiBlocContract = await KudiBlocContract.deploy(
//       mockeCediToken.address,
//       applyForLoanContract.address,
//       disburseLoanContract.address
//     );
//   });

//   it("Should initiate a payment to a vendor", async function () {
//     await applyForLoanContract.applyForLoan("John Doe", 100000, [
//       vendor1.address,
//     ]);
//     const loanApplication = await applyForLoanContract.loanApplications(0);

//     // Disburse mockeCedi to KudiBloc
//     await disburseLoanContract.disburseToKudiBloc(
//       kudiBlocContract.address,
//       5000
//     );

//     // User initiates payment to vendor1
//     await mockeCediToken.connect(user).approve(kudiBlocContract.address, 1000);
//     await kudiBlocContract.connect(user).initiatePayment(vendor1.address, 1000);

//     const userBalance = await mockeCediToken.balanceOf(user.address);
//     const vendor1Balance = await mockeCediToken.balanceOf(vendor1.address);

//     expect(userBalance).to.equal(999000);
//     expect(vendor1Balance).to.equal(1000);
//   });
// });
