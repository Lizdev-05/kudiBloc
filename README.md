# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 KudiBloc ](#-KudiBloc)

  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Structure](#structure-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

# 📖 KUDIBLOC ESCROW LENDING <a name="about-project"></a>

**KudiBlock** This repository contains a basic Ethereum ERC-20 token contract called MyERC20Token, a deployment script, and tests for the contract. Below, I'll provide an overview of the project and how to work with it..

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
   <li><a href="https://soliditylang.org/">Solidity</a></li>
    <li><a href="https://hardhat.org/"></a>Hardhat</li>
    <li><a href="#">Chai</a></li>
    <li><a href="#">Infura</a></li>
  </ul>
</details>

### Structure <a name="structure"></a>

<detail>
  <summary>Project Structure</summary>
  <ul>
    <li>Contracts: The MyERC20Token.sol file contains the Solidity code for the ERC-20 token contract.</li>
    <li>Scripts: The deploy.js file is a deployment script to deploy the MyERC20Token contract to an Ethereum network using Hardhat.</li>
    <li>Test: The MyERC20Token.js file contains tests for the MyERC20Token contract using Hardhat and Chai.</li>
    
  </ul>
  <p>The contract includes functions for:
    <li>Checking the balance of an account.</li>
    <li>Transferring tokens between accounts.</li>
    <li>Approving and transferring tokens on behalf of another account.</li>
    <li>Reverting transactions if the sender does not have sufficient balance or allowance.</li>
</p>
</detail>

## 🚀 Live Demo <a name="live-demo"></a>

- [ Live Demo](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.20+commit.a1b79de6.js)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/Lizdev-05/kudiBloc
```

### Install

Install this project with:

```sh
  cd kudiBloc
  npm install
```

### Usage

Install project dependencies using the command::

```sh
  npm install
```

### Deployment

You can deploy this project using:

```sh
  Configure Hardhat to use the desired Ethereum network in the hardhat.config.js file.
  Run the deployment script to deploy the MyERC20Token contract:
  npx hardhat run scripts/deploy.js --network YOUR_NETWORK

```

### Run tests

Run the tests to ensure the contract functions as expected:

```sh
  npx hardhat test

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Author <a name="author"></a>

👤 **Ojesanmi Elizabeth Oyin**

- GitHub: [@githubhandle](https://github.com/Lizdev-05)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/elizabeth-oyinlade-ojesanmi-0702aa16a)

<!-- 👤 **Ojesanmi Elizabeth Oyin**

- GitHub: [@githubhandle](https://github.com/Lizdev-05)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/elizabeth-oyinlade-ojesanmi-0702aa16a)

👤 **Ojesanmi Elizabeth Oyin**

- GitHub: [@githubhandle](https://github.com/Lizdev-05)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/elizabeth-oyinlade-ojesanmi-0702aa16a) -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **We will add a contract to prevent repayment defaulting.**
- [ ] **We will include a vendor portal**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Lizdev-05/kudiBloc/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project consider giving it a star ⭐️.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for giving me the opportunity to work on this project.

- MEST
- ABSA Bank
- MowBlox
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](#) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
