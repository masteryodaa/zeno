require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",

  defaultNetwork: "ganache",

  networks: {

    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["310612b3648bdb8dc5f7568cd4b3f1c25181fd8cb0b71c7598a469a3eb788d78"]
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Eu7hr-4WpgitKwcKArO0QPgG5xbnToGM",
      accounts: ["87dfe5a2937a450be89eb56faa3b8915a2ccf329c1f8351cbe3687bfa3a8c69f"],
    },

  },

};
