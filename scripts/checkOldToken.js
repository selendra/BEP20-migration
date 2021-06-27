const TokenSwap = artifacts.require('TokenSwap.sol');

module.exports = async done => {
    const OldTokenAddress = await TokenSwap.admin();
    console.log(OldTokenAddress.toString());
    done();
}