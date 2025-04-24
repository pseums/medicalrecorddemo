// --- REQUIRED: Replace with your deployed contract address and ABI ---
const contractAddress = "0xb41bA16D8d1FdEB9cd6e1B8D32EaDC29124D04e3"; // <-- PASTE YOUR ADDRESS HERE
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_patientId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_recordReference",
				"type": "string"
			}
		],
		"name": "addRecord",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isAuthorized",
				"type": "bool"
			}
		],
		"name": "DoctorStatusChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "version",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "recordReference",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "recordedBy",
				"type": "address"
			}
		],
		"name": "RecordAdded",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctor",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_isAuthorized",
				"type": "bool"
			}
		],
		"name": "setDoctorAuthorization",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_patientId",
				"type": "uint256"
			}
		],
		"name": "getLatestRecord",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "recordReference",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "recordedBy",
						"type": "address"
					}
				],
				"internalType": "struct MedicalRecords.Record",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_patientId",
				"type": "uint256"
			}
		],
		"name": "getRecordCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_patientId",
				"type": "uint256"
			}
		],
		"name": "getRecordHistory",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "recordReference",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "recordedBy",
						"type": "address"
					}
				],
				"internalType": "struct MedicalRecords.Record[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isDoctor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientRecords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "recordReference",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "recordedBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
// Example ABI structure (yours will be much longer):
// const contractABI = [
//    { "inputs": [...], "stateMutability": "nonpayable", "type": "constructor" },
//    { "anonymous": false, "inputs": [...], "name": "DoctorStatusChanged", "type": "event" },
//    { "inputs": [...], "name": "addRecord", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
//    { "inputs": [...], "name": "getLatestRecord", "outputs": [...], "stateMutability": "view", "type": "function" },
//    { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "isDoctor", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
//    ... (and all other functions/events from your contract)
// ];
// --- END REQUIRED ---

let provider;
let signer;
let contract;
let currentAccount = null;

// DOM Elements
const connectButton = document.getElementById('connectButton');
const accountSpan = document.getElementById('account');
const isDoctorStatusSpan = document.getElementById('isDoctorStatus');
const checkDoctorButton = document.getElementById('checkDoctorButton');

const doctorAddressInput = document.getElementById('doctorAddress');
const authorizeDoctorButton = document.getElementById('authorizeDoctorButton');
const revokeDoctorButton = document.getElementById('revokeDoctorButton');

const addPatientIdInput = document.getElementById('addPatientId');
const recordRefInput = document.getElementById('recordRef');
const addRecordButton = document.getElementById('addRecordButton');

const viewPatientIdInput = document.getElementById('viewPatientId');
const getLatestButton = document.getElementById('getLatestButton');
const getHistoryButton = document.getElementById('getHistoryButton');

const resultsDiv = document.getElementById('results');
const statusDiv = document.getElementById('status');

// --- Initialization ---

window.addEventListener('load', async () => {
    // Check if MetaMask or similar provider is available
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask (or compatible provider) is installed!');
        // Use Ethers v6 provider
        provider = new ethers.BrowserProvider(window.ethereum);

        // Listen for account changes
        console.log('Setting up accountsChanged listener');
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        // Listen for network changes (optional but recommended)
        window.ethereum.on('chainChanged', (_chainId) => window.location.reload());

        // Try to fetch accounts eagerly (check if already connected)
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts && accounts.length > 0) {
                console.log("Wallet already connected.");
                await handleAccountsChanged(accounts); // Use await here
            } else {
                updateStatus("Please connect your wallet.");
                connectButton.disabled = false; // Ensure button is enabled if no accounts found
            }
        } catch (err) {
             console.error("Error checking initial accounts:", err);
             updateStatus("Error checking wallet connection.", true);
        }

    } else {
        updateStatus('MetaMask is not installed. Please install it to use this dApp.', true);
        connectButton.disabled = true;
    }

    setupEventListeners(); // Setup button listeners
});

function setupEventListeners() {
    // Make sure elements exist before adding listeners
    if (connectButton) connectButton.addEventListener('click', connectWallet);
    if (checkDoctorButton) checkDoctorButton.addEventListener('click', checkDoctorStatus);

    if (authorizeDoctorButton) authorizeDoctorButton.addEventListener('click', () => setDoctorAuth(true));
    if (revokeDoctorButton) revokeDoctorButton.addEventListener('click', () => setDoctorAuth(false));

    if (addRecordButton) addRecordButton.addEventListener('click', addMedicalRecord);
    if (getLatestButton) getLatestButton.addEventListener('click', getLatestMedicalRecord);
    if (getHistoryButton) getHistoryButton.addEventListener('click', getMedicalRecordHistory);
}


// --- Wallet Connection ---

async function connectWallet() {
    if (!provider) {
         updateStatus("MetaMask not detected.", true);
         return;
    }
    try {
        updateStatus("Connecting wallet...");
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        await handleAccountsChanged(accounts); // Use await
        connectButton.disabled = true; // Disable after successful connection
    } catch (error) {
        console.error("User rejected connection or error occurred:", error);
        if (error.code === 4001) { // EIP-1193 user rejected request error
             updateStatus('Wallet connection rejected by user.', true);
        } else {
             updateStatus('Error connecting wallet. Check console.', true);
        }
        connectButton.disabled = false; // Re-enable if connection failed
    }
}

// Handles account changes and initial connection success
async function handleAccountsChanged(accounts) {
    console.log('accountsChanged event detected!', accounts);
    if (!Array.isArray(accounts)) {
        console.error("handleAccountsChanged received invalid accounts:", accounts);
        return; // Exit if accounts is not an array
    }

    if (accounts.length === 0) {
        console.log('MetaMask disconnected or no accounts found.');
        updateStatus('Wallet disconnected. Please connect.');
        currentAccount = null;
        accountSpan.textContent = 'Not Connected';
        isDoctorStatusSpan.textContent = 'Unknown';
        if(checkDoctorButton) checkDoctorButton.style.display = 'none';
        contract = null; // Clear contract instance
        signer = null; // Clear signer
        if(connectButton) connectButton.disabled = false; // Enable connect button
    } else {
        currentAccount = accounts[0];
        console.log("Account connected:", currentAccount);
        accountSpan.textContent = currentAccount;
        updateStatus('Wallet connected.');
        if(checkDoctorButton) checkDoctorButton.style.display = 'inline-block';
        if(connectButton) connectButton.disabled = true; // Keep connect button disabled

        try {
            // Get the signer instance for the connected account
            signer = await provider.getSigner();
            console.log("Signer obtained:", signer);

            // Create the contract instance with the signer
            // This is where ABI parsing happens - ensure contractABI and contractAddress are correct!
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            console.log("Contract instance created:", contract);
            console.log("Target address:", await contract.getAddress()); // Verify target address

            // Check if the functions exist on the contract object
            if (typeof contract.isDoctor !== 'function') {
                 console.error("ABI issue: 'isDoctor' function not found on contract object. Check your ABI.");
                 updateStatus("Error initializing contract: ABI might be incorrect.", true);
                 isDoctorStatusSpan.textContent = 'Contract Init Error';
                 return; // Stop further execution if contract init failed
            }

            // Automatically check doctor status on connect/account change
            await checkDoctorStatus(); // Use await
        } catch (error) {
            console.error("Error creating contract instance or getting signer:", error);
            updateStatus("Error initializing contract interaction. Check ABI/Address/Network. See console.", true);
            isDoctorStatusSpan.textContent = 'Contract Init Error';
            contract = null; // Reset contract instance on error
            signer = null;
        }
    }
}


// --- Contract Interactions ---

async function checkDoctorStatus() {
    // Ensure contract is initialized and user is connected
    if (!contract || !currentAccount) {
         isDoctorStatusSpan.textContent = 'N/A (Connect Wallet)';
         console.log("Cannot check doctor status: contract or account not ready.");
         return;
    }
    console.log("Checking doctor status for:", currentAccount);
    isDoctorStatusSpan.textContent = 'Checking...'; // Provide feedback

    try {
        // Call the view function 'isDoctor' from the contract
        const isDoctor = await contract.isDoctor(currentAccount);
        isDoctorStatusSpan.textContent = isDoctor ? 'Yes' : 'No';
        console.log(`Account ${currentAccount} isDoctor result: ${isDoctor}`);
        updateStatus("Doctor status checked.", false); // Indicate success subtly
    } catch (error) {
        console.error("Error checking doctor status:", error);
        isDoctorStatusSpan.textContent = 'Error'; // Show error on UI
        updateStatus('Error checking doctor status. Check console.', true); // Show detailed status
    }
}

// Function to authorize or revoke doctor status (Owner only)
async function setDoctorAuth(authorize) {
    if (!contract || !signer) {
        updateStatus('Please connect wallet first.', true);
        return;
    }
    const doctorAddr = doctorAddressInput.value;
    if (!ethers.isAddress(doctorAddr)) {
        updateStatus('Invalid doctor address provided.', true);
        return;
    }

    const action = authorize ? "Authorizing" : "Revoking";
    updateStatus(`${action} doctor ${doctorAddr}...`);

    try {
        // Send the transaction to the blockchain
        const tx = await contract.setDoctorAuthorization(doctorAddr, authorize);
        updateStatus(`Transaction sent: ${tx.hash}. Waiting for confirmation...`);

        // Wait for the transaction to be mined (1 confirmation)
        const receipt = await tx.wait();
        updateStatus(`Doctor ${doctorAddr} ${authorize ? 'authorized' : 'revoked'} successfully! Tx confirmed in block ${receipt.blockNumber}.`, false);
        console.log("Transaction receipt:", receipt);

        doctorAddressInput.value = ''; // Clear input on success

        // Re-check own status if the current user's status might have changed
        if (doctorAddr.toLowerCase() === currentAccount.toLowerCase()) {
           await checkDoctorStatus(); // Use await
        }
    } catch (error) {
        console.error(`Error ${action.toLowerCase()} doctor:`, error);
        let reason = getRevertReason(error);
        updateStatus(`Failed to ${action.toLowerCase()} doctor. ${reason}. Ensure you are the contract owner.`, true);
    }
}

// Function to add a medical record (Doctor only)
async function addMedicalRecord() {
    if (!contract || !signer) {
        updateStatus('Please connect wallet and ensure contract is initialized.', true);
        return;
    }
    const patientId = addPatientIdInput.value;
    const recordRef = recordRefInput.value;

    if (!patientId || patientId <= 0) {
        updateStatus('Please provide a valid Patient ID (must be > 0).', true);
        return;
    }
     if (!recordRef) {
        updateStatus('Please provide Record Reference/Content.', true);
        return;
    }

    updateStatus(`Adding record for patient ${patientId}...`);

    try {
        // Optional: Client-side check if caller is a doctor (saves gas on immediate failure)
        // The contract modifier 'onlyDoctor' is the ultimate guard.
        // const isCallerDoctor = await contract.isDoctor(currentAccount);
        // if (!isCallerDoctor) {
        //     updateStatus('Error: Your connected account is not authorized as a doctor.', true);
        //     return;
        // }

        // Send the transaction
        const tx = await contract.addRecord(patientId, recordRef);
        updateStatus(`Transaction sent: ${tx.hash}. Waiting for confirmation...`);

        // Wait for confirmation
        const receipt = await tx.wait();
        updateStatus(`Record added successfully for patient ${patientId}! Tx confirmed in block ${receipt.blockNumber}.`, false);
        console.log("Transaction receipt:", receipt);

        // Optionally clear fields after success
        // addPatientIdInput.value = '';
        // recordRefInput.value = '';
    } catch (error) {
        console.error("Error adding record:", error);
        let reason = getRevertReason(error);
        updateStatus(`Failed to add record. ${reason}. Ensure you are an authorized doctor.`, true);
    }
}

// Function to get the latest medical record for a patient
async function getLatestMedicalRecord() {
    // Read operations can use the contract instance initialized with signer or provider
    if (!contract) {
        updateStatus('Please connect wallet and ensure contract is initialized.', true);
        return;
    }
    const patientId = viewPatientIdInput.value;
    if (!patientId || patientId <= 0) {
        updateStatus('Please provide a valid Patient ID (must be > 0) to view.', true);
        return;
    }

    updateStatus(`Fetching latest record for patient ${patientId}...`);
    resultsDiv.textContent = 'Loading...'; // Provide feedback

    try {
        // Call the view function
        const record = await contract.getLatestRecord(patientId);
        console.log("Raw latest record:", record);

        // Format the output (ethers v6 returns struct data accessibly)
        // Access by index or name if ABI provides names (usually index is safer for older Solidity versions)
        const formattedRecord = {
             timestamp: formatTimestamp(record[0]), // Access by index: timestamp
             recordReference: record[1],          // Access by index: recordReference
             recordedBy: record[2],               // Access by index: recordedBy
         };
        resultsDiv.textContent = JSON.stringify(formattedRecord, null, 2); // Pretty print JSON
        updateStatus(`Latest record fetched for patient ${patientId}.`, false);
    } catch (error) {
        console.error("Error fetching latest record:", error);
        let reason = getRevertReason(error);
         // Handle specific contract error: "No records found"
         if (reason && reason.toLowerCase().includes("no records found")) {
            resultsDiv.textContent = "No records found for this patient.";
            updateStatus(`No records found for patient ${patientId}.`, false); // Not necessarily an error
         } else {
            resultsDiv.textContent = `Error: ${reason}`;
            updateStatus(`Failed to fetch latest record. ${reason}`, true);
         }
    }
}

// Function to get the full medical record history for a patient
async function getMedicalRecordHistory() {
    if (!contract) {
        updateStatus('Please connect wallet and ensure contract is initialized.', true);
        return;
    }
    const patientId = viewPatientIdInput.value;
     if (!patientId || patientId <= 0) {
        updateStatus('Please provide a valid Patient ID (must be > 0) to view.', true);
        return;
    }

    updateStatus(`Fetching record history for patient ${patientId}...`);
    resultsDiv.textContent = 'Loading...';

    try {
        // Call the view function
        const history = await contract.getRecordHistory(patientId);
        console.log("Raw history:", history);

        if (!history || history.length === 0) {
             resultsDiv.textContent = "No records found for this patient.";
             updateStatus(`No records found for patient ${patientId}.`, false);
        } else {
            // Format the array of records
            const formattedHistory = history.map((record, index) => ({
                version: index + 1, // Add version number for clarity
                timestamp: formatTimestamp(record[0]), // index 0: timestamp
                recordReference: record[1],          // index 1: recordReference
                recordedBy: record[2],               // index 2: recordedBy
            }));
            resultsDiv.textContent = JSON.stringify(formattedHistory, null, 2); // Pretty print JSON
            updateStatus(`Record history (${history.length} versions) fetched for patient ${patientId}.`, false);
        }
    } catch (error) {
        console.error("Error fetching record history:", error);
         let reason = getRevertReason(error);
        resultsDiv.textContent = `Error: ${reason}`;
        updateStatus(`Failed to fetch record history. ${reason}`, true);
    }
}


// --- Helper Functions ---

// Updates the status message div
function updateStatus(message, isError = false) {
    console.log(`Status Update: ${message} ${isError ? '(Error)' : ''}`);
    if (statusDiv) {
        statusDiv.textContent = message;
        statusDiv.className = isError ? 'error' : 'success'; // Assumes you have CSS classes .error and .success
    }
}

// Formats Solidity timestamp (seconds BigInt) to locale string
function formatTimestamp(timestampBigInt) {
    if (typeof timestampBigInt === 'undefined' || timestampBigInt === null) {
        return "Invalid Date";
    }
    try {
       // Solidity timestamp is in seconds, convert to milliseconds for JS Date
       const timestampNumber = Number(timestampBigInt) * 1000;
       if (isNaN(timestampNumber)) return "Invalid Timestamp Value";
       return new Date(timestampNumber).toLocaleString(); // Converts to user's local time zone and format
    } catch (e) {
        console.error("Error formatting timestamp:", e);
        // Fallback for very large numbers that might exceed Number.MAX_SAFE_INTEGER
        return timestampBigInt.toString() + " (raw seconds)";
    }
}

// Tries to extract a human-readable revert reason from an ethers error object
function getRevertReason(error) {
    let reason = error.reason || error.message || "An unknown error occurred";
    // Ethers v6 often includes reason in error.reason directly
    // Sometimes it might be nested, especially with custom errors or specific providers
    if (error.data?.message) { // Check common nested location
        reason = error.data.message;
    }
    // Further refine known error patterns
    if (reason.includes("execution reverted:")) {
        reason = reason.split("execution reverted:")[1].trim();
    }
     if (reason.includes("user rejected transaction")) {
        reason = "Transaction rejected by user in wallet.";
    }
     if (reason.includes("missing revert data")) {
        reason = "Transaction failed (no specific reason provided by contract)";
     }
     // Add more specific error checks if needed based on your contract's require statements
     if (reason.includes("Caller is not an authorized doctor")) {
         reason = "Caller is not an authorized doctor";
     }
     if (reason.includes("Ownable: caller is not the owner")) {
         reason = "Caller is not the contract owner";
     }

    return reason;
}