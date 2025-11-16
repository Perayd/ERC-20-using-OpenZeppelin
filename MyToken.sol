// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        // initialSupply should be provided in wei units (e.g., 1e18 for 1 token with 18 decimals)
        _mint(msg.sender, initialSupply);
    }

    // optional: owner-only mint function
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
