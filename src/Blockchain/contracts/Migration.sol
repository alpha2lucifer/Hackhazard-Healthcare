


// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations_Hack_JMI {
  address public owner;
  uint public last_completed_migration;

  

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    Migrations_Hack_JMI upgraded = Migrations_Hack_JMI(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}