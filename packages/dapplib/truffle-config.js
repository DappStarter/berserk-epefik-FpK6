require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note noise arrow grid ensure slot gasp'; 
let testAccounts = [
"0x9c841046f5dbccb1ad622ad8057390d29f9b115385eb29792e23763ceaf5474b",
"0x13d341b453b7cdd570693de40ab2f79224929e2c88752676ee86e7ffbb949073",
"0x113169024406d1f16a56bbaebbe5789849f07cb82ef9ff28c3133919e374d73c",
"0x9e5d803ba43ebc74fe9eac6abcf755835416659c2c7ee74c4447d15574e5d98b",
"0x5be1c3446f15fa7d78632d275f03023b6cb4384b3d9d5a289c25d9ec40ebfa3f",
"0xcc55658270e93aca3dd83acacbd069fedc84439f38c0ceb0b48e79bdbfc127cb",
"0x5ecf65455ce9271c0464c4c44b122078e8a900bf121187874ed212250caa7b9f",
"0x486d2eac82b181fa820f9973cbd32eb31663165fb7531f065e87bf2fb9dcd834",
"0x844eb6dbfe61993d920d8151ca4e190daaf6d236adb825f6babcc10d4198c3ce",
"0x64187c6a3bea7633b920ea21745a78c6a2e7d6bb2b03233285bf6523a8239610"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

