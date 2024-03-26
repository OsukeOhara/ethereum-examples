const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync("c:\\keys\\.secret").toString().trim(); // contains mnemonic
const infuraKey = fs.readFileSync("c:\\keys\\.infura").toString().trim(); // infura key


module.exports = {
    networks: {
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
        provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby id
        skipDryRun: true
    }
  },
    mocha: { },
    compilers: { solc: { version: "^0.8.3"} }
}
