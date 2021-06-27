// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenSwap {
    address public admin;
    IERC20 public oldToken;
    IERC20 public newToken;

    constructor(address _oldToken, address _newToken) {
        admin = msg.sender;
        oldToken = IERC20(_oldToken);
        newToken = IERC20(_newToken);
    }

    function swap(uint256 _amount) public {
        // Double check if the admin have permision.
        require(
            newToken.allowance(admin, address(this)) >= _amount,
            "New token not approved"
        );
        // Check if the sender have approve the old token spending for contract.
        require(
            oldToken.allowance(msg.sender, address(this)) >= _amount,
            "Old Token allowance too low"
        );
        _safeTransferFrom(oldToken, msg.sender, admin, _amount);
        _safeTransferFrom(newToken, admin, msg.sender, _amount);
    }

    function _safeTransferFrom(
        IERC20 token,
        address sender,
        address recipient,
        uint256 amount
    ) private {
        bool sent = token.transferFrom(sender, recipient, amount);
        require(sent, "Token transfer failed");
    }
}
