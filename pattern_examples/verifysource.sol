// Verify code from https://ethereum-play.github.io/editor-solidity/ on etherscan:
// Check tab output.json, notice the compiler version and optimizer:true
// Stored here: https://ropsten.etherscan.io/address/0x55bdf79860ca3a68d53171d3a3a2fa4696a16f61#code

pragma solidity ^0.7.0;

import "Z:\blockchain\web3examples\ethereum\pattern_examples\Verify\import.sol";

contract TestPublish {
  string public MyName="Test publication to Etherscan";
  function SetMyName(string calldata _MyName) external {
     MyName = _MyName;
  }
}
