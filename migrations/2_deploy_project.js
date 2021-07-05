const TokenSwap = artifacts.require('TokenSwap');

module.exports = function (deployer) {
    const _oldToken = '0x288d3a87a87c284ed685e0490e5c4cc0883a060a';
    const _newToken = '0x30bab6b88db781129c6a4e9b7926738e3314cf1c';

    deployer.deploy(TokenSwap, _oldToken, _newToken);
};