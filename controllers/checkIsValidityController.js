const ethers = require('ethers');
const { contractAddress } = require('../constants/contractAddres.js');
const { contractABI } = require('../constants/contractABI.js');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

const checkIsValidity = async (req, res) => {
    const { id } = req.body;
    try {
        const isValid = await contract.checkValidity(id);
        res.status(200).json({ isValid });
    } catch (error) {
        console.error('Error checking validity:', error);
        res.status(500).json({ error: 'Failed to check validity' });
    }
};

module.exports = {
    checkIsValidity
};
