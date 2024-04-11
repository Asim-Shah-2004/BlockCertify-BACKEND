const { ethers,network} = require('hardhat');

async function main() {
    const Certify = await ethers.getContractFactory('Certify');
    console.log('deploying contracts ....');
    const certify = await Certify.deploy();
    await certify.waitForDeployment();
    const address = await certify.getAddress();
    console.log('deployed contract address:', address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


