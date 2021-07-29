import tokens from "config/constants/tokens";
import { useTokenBalance } from "hooks/useTokenBalance";
import BigNumber from "bignumber.js";
import { formatNumber, getBalanceAmount } from "utils/formatBalance";

const Home = () => {
  const displayAmount = (value: BigNumber): string => {
    return formatNumber(getBalanceAmount(value, 18).toNumber(),3,3);
  };
  const mmpBalance = useTokenBalance(
    "0x9c9007950c2c2B40618D2511d79EB20951D8655e",
    tokens.wmmp.address[56]
  );

  return (
    <div>
      <p>mmpBalance {mmpBalance.toString()}</p>
      <p>mmpBalance {displayAmount(mmpBalance)}</p>
    </div>
  );
};

export default Home;
