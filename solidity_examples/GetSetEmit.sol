// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract SetGetEmit {
    uint8 public storedData;
    event Log(string message,address caller, uint8 value);
  
    function Set(uint8 x) public returns (uint8) {
        storedData = x;
        emit Log("In function set",address(this), storedData );
        return storedData;
    }

    function Get() public view returns (uint8) {
        return storedData;
    }
}
