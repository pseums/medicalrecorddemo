# Blockchain Medical Record DApp Demo

A simple demo DApp showcasing a blockchain-based medical record system prototype. Built with Solidity, Ethers.js, and MetaMask, it demonstrates immutable storage, record versioning, and basic role-based access control.

## ✨ Features Demonstrated

*   **Connect Wallet:** Integrates with MetaMask for user authentication.
*   **Role Management:** An `Owner` role manages `Doctor` permissions (authorize/revoke).
*   **Record Management:** Authorized `Doctor` accounts can add/update patient records (updates create new versions).
*   **Data Access:** Anyone can view the latest record or the full, immutable history for a patient.
*   **Immutability & Traceability:** Highlights core blockchain benefits for record integrity.

## 🚀 Live Demo

Access the live demo hosted on GitHub Pages:

**[medicalrecorddemo](https://pseums.github.io/medicalrecorddemo/)**


## 📋 Prerequisites & How to Use

1.  **Install MetaMask:** You need the MetaMask browser extension.
2.  **Connect to Testnet:** Ensure MetaMask is connected to the **Sepolia Testnet** (where the demo contract is deployed).
3.  **(Optional) Get Test ETH:** Obtain Sepolia ETH from a faucet if you want to perform transactions that require gas (e.g., adding records as a Doctor, managing permissions as Owner).
4.  **Interact:** Visit the demo link, connect your wallet, and use the UI sections to interact with the smart contract based on your connected account's role (Owner, Doctor, or general user).

## 🛠️ Tech Stack

*   **Smart Contract:** Solidity, OpenZeppelin Contracts (`Ownable`)
*   **Blockchain Interaction:** Ethers.js, MetaMask
*   **Frontend:** HTML, CSS, JavaScript
*   **Hosting:** GitHub Pages

## ⚠️ Disclaimer & Limitations

*   This is a **Proof-of-Concept (PoC)** and **not suitable for production use**.
*   **Privacy:** Patient IDs and record references are **public** on the blockchain.
*   **Storage:** Assumes actual medical files are stored off-chain; only references are on-chain.
*   **Access Control:** Uses a very basic Owner/Doctor role system.

---
