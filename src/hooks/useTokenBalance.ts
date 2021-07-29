import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { BIG_ZERO } from "utils/bigNumber";
import { getBep20Contract } from "utils/contractHelpers";

export const useTokenBalance = (account: string, tokenAddress: string) => {
  const [balance, setBalance] = useState(BIG_ZERO);


  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress);
      const res = await contract.methods.balanceOf(account).call();
      setBalance(new BigNumber(res));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, tokenAddress]);

  return balance;
};

export default useTokenBalance
