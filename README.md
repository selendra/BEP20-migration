# BEP20-migration

#### How to Migrate tokens

1. Holder has X tokens from Old SEL, which is a BEP20 token running on BSC Network.
2. Holder appproves TokenSwap Contract to withdraw X tokens from Old SEL.
3. Holder calls TokenSwap.swap().
4. Admin Account will send X2 of SEL V2 which is 1:2 ratio to V1 Token holders.

#### Progress
- [x] Modified Contract.
- [ ] Deploy on Testnet.
- [ ] Web UI Intergration (Testnet).
- [ ] Mobile (Bitriel Wallet) Integration (Testnet).
- [ ] Deploy on Mainnet.
- [ ] Web UI Intergration (Mainnet).
- [ ] Mobile (Bitriel Wallet) Integration (Mainnet).

#### Mainet deploy

```
truffle migrate --reset --network bscMainnet
``` 