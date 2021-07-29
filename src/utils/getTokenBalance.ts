
import { getBep20Contract } from "utils/contractHelpers";

export const getTokenBalance = async (account: string, tokenAddress: string) => {
  let balance = "0"
  if(!tokenAddress || !account) return balance

  const fetchBalance = async () => {
    const contract = getBep20Contract(tokenAddress);
    const res = await contract.methods.balanceOf(account).call();
    balance = res
  };

  await fetchBalance();

  return balance;
};
