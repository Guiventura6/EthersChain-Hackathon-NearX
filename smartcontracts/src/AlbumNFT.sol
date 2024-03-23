// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract AlbumNFT is ERC1155, ERC1155Burnable {
    uint public constant Figurinha_0 = 0;
    uint public constant Figurinha_1 = 1;
    uint public constant Figurinha_2 = 2;
    uint public constant Figurinha_3 = 3;
    uint public constant Figurinha_4 = 4;
    uint public constant Figurinha_5 = 5;
    uint public constant Figurinha_6 = 6;
    uint public constant Figurinha_7 = 7;
    uint public constant Figurinha_8 = 8;
    uint public constant Figurinha_9 = 9;
    uint public constant Figurinha_10 = 10;
    uint public constant Figurinha_11 = 11;

    uint[] public currentSupply = [
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50
    ];

    uint public tokenPrice = 0.01 ether;

    string public constant BASE_URL =
        "ipfs://QmWj6A5hMZ3tEo8RibfzcAVaDFxTYNur9itjrtt4jRF2xw/";

    address payable public immutable owner;

    constructor() ERC1155(BASE_URL) {
        owner = payable(msg.sender);
    }

    function mint(uint256 id) external payable {
        require(id < 3, "This token does not exists");
        require(msg.value >= tokenPrice, "Insufficient payment");
        require(currentSupply[id] > 0, "Max supply reached");

        _mint(msg.sender, id, 1, "");
        currentSupply[id]--;
    }

    function uri(uint256 id) public pure override returns (string memory) {
        require(id < 3, "This token does not exists");
        return string.concat(BASE_URL, Strings.toString(id), ".json");
    }

    function transferNFT(address to, uint256 id) external {
        require(balanceOf(msg.sender, id) > 0, "You do not own this NFT");
        safeTransferFrom(msg.sender, to, id, 1, "");
    }

    function withdraw() external {
        require(msg.sender == owner, "You do not have permission");
        uint256 amount = address(this).balance;
        (bool success, ) = owner.call{value: amount}("");
        require(success == true, "Failed to withdraw");
    }
}
