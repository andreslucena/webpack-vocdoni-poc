import { VocdoniSDKClient, EnvOptions } from '@vocdoni/sdk'

const client = new VocdoniSDKClient({
  env: EnvOptions.STG, // mandatory, can be 'dev' or 'stg'
  wallet: signer, // optional, the signer used (Metamask, Walletconnect)
})

console.log(client)
