import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { BIG_ZERO } from "utils/bigNumber";
import useWeb3 from "./useWeb3";
import { getBep20Contract } from "utils/contractHelpers";

export const useTokenBalance = (account: string, tokenAddress: string) => {
  const [balance, setBalance] = useState(BIG_ZERO);

  const web3 = useWeb3();

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress, web3);
      const res = await contract.methods.balanceOf(account).call();
      setBalance(new BigNumber(res));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, tokenAddress, web3]);

  return balance;
};

export default useTokenBalance
