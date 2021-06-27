const TokenSwap = artifacts.require('TokenSwap');

module.exports = function (deployer) {
    const _oldToken = '0xc7fE9232c55Fab39fd7C89AA459aa03C55Ee283C';
    const _newToken = '0xE4A8473c6eb635A44c4e7A7A371Ed5743bb5f976';

    deployer.deploy(TokenSwap, _oldToken, _newToken);
};