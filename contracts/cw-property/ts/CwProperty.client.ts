/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.11.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Uint128, InstantiateMsg, Coin, ExecuteMsg, ExecuteMsg1, Binary, Expiration, Timestamp, Uint64, Addr, Cw20ReceiveMsg, QueryMsg, QueryMsg1, NullableNull, OutstandingSharesResponse } from "./CwProperty.types";
export interface CwPropertyReadOnlyInterface {
  contractAddress: string;
  cw404QueryMsg: (queryMsg: QueryMsg) => Promise<NullableNull>;
  getPropertyDetails: () => Promise<NullableNull>;
  getShareHolders: () => Promise<NullableNull>;
  getShareBalance: ({
    address
  }: {
    address: Addr;
  }) => Promise<Uint128>;
  outstandingShares: () => Promise<OutstandingSharesResponse>;
}
export class CwPropertyQueryClient implements CwPropertyReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;
  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.cw404QueryMsg = this.cw404QueryMsg.bind(this);
    this.getPropertyDetails = this.getPropertyDetails.bind(this);
    this.getShareHolders = this.getShareHolders.bind(this);
    this.getShareBalance = this.getShareBalance.bind(this);
    this.outstandingShares = this.outstandingShares.bind(this);
  }
  cw404QueryMsg = async (queryMsg: QueryMsg): Promise<NullableNull> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cw404_query_msg: queryMsg
    });
  };
  getPropertyDetails = async (): Promise<NullableNull> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_property_details: {}
    });
  };
  getShareHolders = async (): Promise<NullableNull> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_share_holders: {}
    });
  };
  getShareBalance = async ({
    address
  }: {
    address: Addr;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_share_balance: {
        address
      }
    });
  };
  outstandingShares = async (): Promise<OutstandingSharesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      outstanding_shares: {}
    });
  };
}
export interface CwPropertyInterface extends CwPropertyReadOnlyInterface {
  contractAddress: string;
  sender: string;
  cw404ExecuteMsg: (executeMsg: ExecuteMsg, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  listShares: ({
    amount
  }: {
    amount: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  buyShares: ({
    amount,
    from
  }: {
    amount: Uint128;
    from?: Addr;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  claimPayout: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  receivePayment: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  receivePaymentNative: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class CwPropertyClient extends CwPropertyQueryClient implements CwPropertyInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;
  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.cw404ExecuteMsg = this.cw404ExecuteMsg.bind(this);
    this.listShares = this.listShares.bind(this);
    this.buyShares = this.buyShares.bind(this);
    this.claimPayout = this.claimPayout.bind(this);
    this.receivePayment = this.receivePayment.bind(this);
    this.receivePaymentNative = this.receivePaymentNative.bind(this);
  }
  cw404ExecuteMsg = async (executeMsg: ExecuteMsg, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      cw404_execute_msg: executeMsg
    }, fee, memo, _funds);
  };
  listShares = async ({
    amount
  }: {
    amount: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      list_shares: {
        amount
      }
    }, fee, memo, _funds);
  };
  buyShares = async ({
    amount,
    from
  }: {
    amount: Uint128;
    from?: Addr;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      buy_shares: {
        amount,
        from
      }
    }, fee, memo, _funds);
  };
  claimPayout = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim_payout: {}
    }, fee, memo, _funds);
  };
  receivePayment = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive_payment: {
        amount,
        msg,
        sender
      }
    }, fee, memo, _funds);
  };
  receivePaymentNative = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive_payment_native: {}
    }, fee, memo, _funds);
  };
}