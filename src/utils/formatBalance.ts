import web3 from 'web3'

export const getBalanceAmount = (amount: string) => {
  return Number(web3.utils.fromWei(amount))
}

export const formatNumber = (number: number, minPrecision: number = 3, maxPrecision: number = 3) => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }
  return number.toLocaleString(undefined, options)
}

export const displayAmount = (value: string, minPrecision: number = 3, maxPrecision: number = 3): string => {
  return formatNumber(getBalanceAmount(value),minPrecision,maxPrecision);
};
