import { useEffect, useState } from "react";
import { getBep20Contract } from "utils/contractHelpers";

export const useTokenBalance = (account: string, tokenAddress: string) => {
  // balanceOf return type เป็น string
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress);
      const res = await contract.methods.balanceOf(account).call();
      setBalance(res);
    };

    if (account) {
      fetchBalance();
    }
  }, [account, tokenAddress]);

  return balance;
};

export default useTokenBalance
