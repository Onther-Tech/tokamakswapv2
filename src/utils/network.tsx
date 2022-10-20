import { DEFAULT_NETWORK } from "../constants/index";
import { ethers } from "ethers";

export const getNetworkDetails = async (provider: any, address: string) => {
  try {
    const currentNetwork = await provider.getNetwork();
    if (currentNetwork.chainId !== Number(DEFAULT_NETWORK)) {
      return {
        error: `Wrong network selected. Please make sure you are on ${await getNetworkName(
          Number(DEFAULT_NETWORK)
        )}`,
      };
    }
    return {
      currentNetwork,
      networkAddress: address,
      currentBalance: await provider.getBalance(address), // ether balance
    };
  } catch (error) {
    return {
      error: `Unable to detect Web3 on browser`,
    };
  }
};

export const getNetworkName = async (id: string | number) => {
  let link: string;
  switch (id) {
    case 1:
      link = "Main Network";
      break;
    case 3:
      link = "Ropsten Testnet Network";
      break;
    case 4:
      link = "Rinkeby Testnet Network";
      break;
    case 42:
      link = "Kovan Testnet Network";
      break;
    default:
      link = "Local Testnet Network";
      break;
  }

  return link as string;
};

export const getExplorerLink = async (id: string | number | undefined) => {
  let link: string;
  switch (id) {
    case 1:
      link = `https://etherscan.io/address/`;
      break;
    case 3:
      link = `https://ropsten.etherscan.io/address/`;
      break;
    case 4:
      link = `https://rinkeby.etherscan.io/address/`;
      break;
    case 42:
      link = `https://kovan.etherscan.io/address/`;
      break;
    default:
      link = "Unknown network";
      break;
  }

  return link as string;
};

export const getExplorerTxnLink = async (id: string | number | undefined) => {
  let link: string;
  switch (id) {
    case 1:
      link = `https://etherscan.io/tx/`;
      break;
    case 3:
      link = `https://ropsten.etherscan.io/tx/`;
      break;
    case 4:
      link = `https://rinkeby.etherscan.io/tx/`;
      break;
    case 42:
      link = `https://kovan.etherscan.io/tx/`;
      break;
    default:
      link = "Unknown network";
      break;
  }

  return link as string;
};

