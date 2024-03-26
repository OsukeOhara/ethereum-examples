const { ethers } = require('ethers');

async function main() {
  // Configuring the connection to an Ethereum node
  const network = 'rinkeby';
  const provider = new ethers.providers.InfuraProvider(network, process.env.INFURA_PROJECT_ID);
  // Creating a signing account from a private key
  const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY, provider);
  // Creating and sending the transaction object
  const tx = await signer.sendTransaction({
    to: '0xeAD9C93b79Ae7C1591b1FB5323BD777E86e150d4',
    value: ethers.utils.parseUnits('0.001', 'ether'),
  });
  console.log('Mining transaction...');
  console.log(`https://${network}.etherscan.io/tx/${tx.hash}`);
  // Waiting for the transaction to be mined
  const receipt = await tx.wait();
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);
}

require('dotenv').config();
main();
