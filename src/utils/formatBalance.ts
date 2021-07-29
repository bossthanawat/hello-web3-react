import BigNumber from 'bignumber.js'
import { BIG_TEN } from './bigNumber'


export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals))
}

export const formatNumber = (number: number, minPrecision: number = 3, maxPrecision: number = 3) => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }
  return number.toLocaleString(undefined, options)
}
