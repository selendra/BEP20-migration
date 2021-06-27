const TokenSwap = artifacts.require('TokenSwap');

module.exports = function (deployer) {
    const _oldToken = '';
    const _newToken = '';

    deployer.deploy(TokenSwap, _oldToken, _newToken);
};