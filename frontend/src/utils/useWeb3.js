import Web3 from "web3";

export function Web3Instance() {
  const testnet = 'https://bsc-dataseed.binance.org';

  let instance = new Web3(testnet);
  return instance;
};
