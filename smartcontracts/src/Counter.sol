// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Counter {
    uint256 public number;
    address owner;

    error Unauthorized();

    constructor() {
        owner = 0x5112fDF253B858706e7103A419FE53AfD6a013D2;
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    function onlyOwner() internal view {
        if (msg.sender != owner) {
            revert Unauthorized();
        }
    }

    function transferOwnership(address newOwner) external {
        onlyOwner();
        owner = newOwner;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}
