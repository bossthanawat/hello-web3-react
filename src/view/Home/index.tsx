import "App.css";
import tokens from "config/constants/tokens";
import { useTokenBalance } from "hooks/useTokenBalance";
import { useEffect } from "react";
import { useState } from "react";
import { displayAmount } from "utils/formatBalance";
import { getTokenBalance } from "utils/getTokenBalance";

const Home = () => {
  const [accountId, setAccountId] = useState("");
  const cakeBalance = useTokenBalance(accountId, tokens.cake.address[56]);
  const [listBalanceByAddress, setListBalanceByAddress] = useState<
    Array<{ symbol: string; balance: string }>
  >([]);

  useEffect(() => {
    const gellAllTokenBalance = async () => {
      const promises = (Object.keys(tokens) as Array<keyof typeof tokens>).map(
        async (key) => {
          const item = await getTokenBalance(
            accountId,
            tokens[key].address[56]
          );
          return {
            symbol: tokens[key].symbol,
            balance: displayAmount(item),
          };
        }
      );
      return await Promise.all(promises);
    };
    // gellAllTokenBalance().then((result)=>setListBalanceByAddress(result))
    gellAllTokenBalance().then((result) => setListBalanceByAddress(result));
  }, [accountId]);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      setAccountId(event.target.value);
    }
  };

  return (
    <div className="app">
      <div className="box-root">
        <h1>Hello web3</h1>
        <input
          className="input-address"
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="search by Address"
        />
        <div className="card">
          <div>
            <h3>useTokenBalance CAKE</h3>
            <h2>{displayAmount(cakeBalance)}</h2>
          </div>
        </div>
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>token</th>
                <th>balances</th>
              </tr>
            </thead>
            <tbody>
              {listBalanceByAddress.map(({ symbol, balance }, index) => (
                <tr key={index}>
                  <td>{symbol}</td>
                  <td>{balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
