const ethers = require('ethers');
const { contractAddress } = require('../constants/contractAddres.js');
const { contractABI } = require('../constants/contractABI.js');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

const invalidateEntry = async (req, res) => {
    const { id } = req.body;
    try {
        const transaction = await contract.invalidateEntry(id);
        await transaction.wait();
        res.status(200).json({ message: 'Entry invalidated successfully' });
    } catch (error) {
        console.error('Error invalidating entry:', error);
        res.status(500).json({ error: 'Failed to invalidate entry' });
    }
};

module.exports = {
    invalidateEntry
};
