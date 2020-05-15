require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rebel sad snake hover praise army genius'; 
let testAccounts = [
"0xbc366a40cfd1ee215d0ab773c48bd17d479460ec0142fff611f2224036391eea",
"0x9badcba00acc2753f87bac438f6873b7865af5bce9c48a3f6021649cd0daf8f1",
"0x0fec63dd9fec1204ed34bce1f76f7bdddf3f08bea7753c84e33bd81fc547225a",
"0x349a555009f4591d958fc11ef43fd96f6ae2b954e5384c232e345f58022fea1a",
"0x5690c626ac99b909d79ad4e454dbeac2dce82468a97e44a4ff24d5ad1fac48a8",
"0xb18ac10c388cb31078d422a21a1b13441166d86fccc7e31b5d1fa4ccffb29afd",
"0x89657539e366558fc4d39cca0d4ed44437d963a091493de82736202d50f8b175",
"0xa0b7d37c6765b7dfd8e4e72786d089fabade7b60001cb38ab15f34c5f0585c5a",
"0x2c2f5f9a3944a7d8a51cf29b6f19c3c001925362791ccff7712c58e38669e8c3",
"0x2a90d2f51412b73898d98443722117a09492f687180bc35412186e4dbd94e30c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
