import { AbiItem } from 'web3-utils'
import bep20Abi from 'config/abi/bep20.json'
import web3 from "utils/web3"

const getContract = (abi: any, address: string) => {
  return new web3.eth.Contract((abi as unknown) as AbiItem, address)
}

export const getBep20Contract = (address: string) => {
  return getContract(bep20Abi, address)
}

