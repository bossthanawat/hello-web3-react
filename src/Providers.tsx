import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider
      getLibrary={(provider: any): Web3 => {
        return provider;
      }}
    >
      {children}
    </Web3ReactProvider>
  );
};

export default Providers;
