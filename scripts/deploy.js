const hre = require('hardhat');

async function main() {
    console.log("deploying contract");

    const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory")
    const campaignFactory = await CampaignFactory.deploy();

    await campaignFactory.deployed();

    console.log("Factory deployed to:", campaignFactory.address);
}   

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });