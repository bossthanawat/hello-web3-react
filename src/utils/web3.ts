import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'

const RPC_URL = "https://bsc-dataseed.binance.org"
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 } as HttpProviderOptions)
const web3= new Web3(httpProvider)

export default web3
