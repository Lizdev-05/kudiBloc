

// contract Kudi {
//     MyERC20Token mockeCediToken;
//     constructor(address _mockeCediToken) {
//         mockeCediToken = MyERC20Token(_mockeCediToken);
//     }
// }


// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
import "./MyERC20Token.sol";

contract ApplyForLoanContract {
    struct LoanApplication {
        string name;
        uint256 loanAmount;
        address[] vendorList;
    }

    LoanApplication[] public loanApplications;

    event LoanApplicationCreated(uint256 applicationId);

    function applyForLoan(string memory _name, uint256 _loanAmount, address[] memory _vendorList) external {
        LoanApplication memory newApplication = LoanApplication(_name, _loanAmount, _vendorList);
        loanApplications.push(newApplication);
        emit LoanApplicationCreated(loanApplications.length - 1);
    }
}

contract DisburseLoanContract {
    MyERC20Token public mockeCediToken;

    constructor(MyERC20Token _mockeCediToken) {
        mockeCediToken = _mockeCediToken;
    }

    function disburseToKudiBloc(address kudiBlocAddress, uint256 amount) external {
        mockeCediToken.transfer(kudiBlocAddress, amount);
    }
}

contract KudiBlocContract {
    MyERC20Token public mockeCediToken;
    ApplyForLoanContract public loanApplicationContract;
    DisburseLoanContract public disburseContract;

    constructor(
        MyERC20Token _mockeCediToken,
        ApplyForLoanContract _loanApplicationContract,
        DisburseLoanContract _disburseContract
    ) {
        mockeCediToken = _mockeCediToken;
        loanApplicationContract = _loanApplicationContract;
        disburseContract = _disburseContract;
    }

    mapping(address => uint256) public vendorPayments;

    function initiatePayment(address vendor, uint256 amount) external {
        require(vendorPayments[msg.sender] >= amount, "Insufficient balance");
        vendorPayments[msg.sender] -= amount;
        mockeCediToken.transfer(vendor, amount);
    }
}
