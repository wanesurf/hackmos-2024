/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.11.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Addr = string;
export type DAOCategory = "real_estate" | "retail" | "hospitality" | "other";
export interface InstantiateMsg {
  admins: Addr[];
  default_royalty_fee?: number | null;
  metadata: DAOMetadata;
  property_contract_code_id?: number | null;
}
export interface DAOMetadata {
  category: DAOCategory;
  category_other?: string | null;
  description?: string | null;
  image_uri?: string | null;
  name: string;
  symbol?: string | null;
}
export type ExecuteMsg = {
  set_property_contract_code_id: {
    code_id: number;
  };
} | {
  launch_property: {
    data: DAOProperty;
  };
} | {
  update_admins: {
    add: Addr[];
    remove: Addr[];
  };
};
export type Uint128 = string;
export interface DAOProperty {
  estimated_apy: number;
  estimated_monthly_income: Coin;
  image_uri: string;
  price_per_share: Coin;
  property_contract_address: Addr;
  royalty_fee: number;
  status: string;
  subcategory: string;
  total_shares: number;
}
export interface Coin {
  amount: Uint128;
  denom: string;
}
export type QueryMsg = {
  get_config: {};
} | {
  get_property_contract_code_id: {};
} | {
  get_all_properties: {};
} | {
  get_property: {
    id: Addr;
  };
} | {
  get_stats: {};
};
export type ArrayOfDAOProperty = DAOProperty[];
export interface Config {
  admins: Addr[];
  default_royalty_fee: number;
  owner: Addr;
  property_contract_code_id?: number | null;
}
export type NullableDAOProperty = DAOProperty | null;
export type Nullableuint64 = number | null;
export interface DAOStats {
  apy: number;
  num_investors: number;
  num_properties: number;
  portfolio_value: number;
}