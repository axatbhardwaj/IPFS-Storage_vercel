require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = 
{
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: 
  {
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
        process.env.MNEMONIC,
        `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
        );
      },
      gasPrice: 65000000000,
      network_id: 4
    },
		
    //Network configuration for Ganache RPC
    development: 
    {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  }
};
