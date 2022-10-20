export * from "./wallet";

export type StakingTableProps = {
  name: string;
  period: string;
  apy: string;
  total_staked: string;
  earning_per_ton: string;
  staked: string;
  earned: string;
};

type eth = "0x0000000000000000000000000000000000000000";
type ton = "0x44d4F5d89E9296337b8c48a332B3b2fb2C190CD0";
export type LibraryType = any;
export interface UserContract {
  account: string;
  library: LibraryType;
}

export type TokenType = eth | ton;

export type IconsSort =
  | "website"
  | "discord"
  | "telegram"
  | "twitter"
  | "medium";
