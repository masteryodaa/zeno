const main = async() =>{

    const [deployer] = await hre.ethers.getSigners();

    const deployerAddress = await deployer.getAddress();
    console.log(`Deployer address: ${deployerAddress}`);

    const deployerBalance = await deployer.getBalance();
    console.log(`Deployer balance: ${hre.ethers.utils.formatEther(deployerBalance)}`+" ETH");

    const zenoFactory = await hre.ethers.getContractFactory("Zeno");
    const zenoContract = await zenoFactory.deploy();
    await zenoContract.deployed();

    const zenoContractAddress = await zenoContract.address;
    console.log(`Zeno contract address: ${zenoContractAddress}`);

    let totalSupply = await zenoContract.getTotalSupply();
    console.log(`Total supply: ${hre.ethers.utils.formatEther(totalSupply)}`+" ZENO");

    let transferTo = await zenoContract.transferTo("0x89B29F823e1D81ee3FECdB488a10050Aa881821b", 1000000);
    await transferTo.wait();
    console.log("Transfer to success");

    let userBalance = await zenoContract.getUserBalance(deployerAddress);
    console.log(`User balance: ${userBalance}`+" ZENO");

    userBalance = await zenoContract.getUserBalance("0x89B29F823e1D81ee3FECdB488a10050Aa881821b");
    console.log(`User balance: ${userBalance}`+" ZENO");

}    



const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
  }
  
  runMain();