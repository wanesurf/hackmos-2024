import { Chain } from "@chain-registry/types";

const chain: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "mantrachaintestnet2",
  status: "live",
  network_type: "testnet",
  pretty_name: "MANTRA Dukong Testnet",
  chain_type: "cosmos",
  chain_id: "mantra-dukong-1",
  bech32_prefix: "mantra",
  daemon_name: "mantrachaind",
  node_home: "$HOME/.mantrachain",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "uom",
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.03,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "uom",
      },
    ],
  },
  codebase: {
    git_repo: "https://github.com/MANTRA-Chain/mantrachain",
    recommended_version: "1.0.0-rc3",
    compatible_versions: ["1.0.0-rc3"],
    cosmos_sdk_version: "0.50.10",
    consensus: {
      type: "cometbft",
      version: "0.38",
    },
    sdk: {
      type: "cosmos",
      version: "0.50.10",
    },
    cosmwasm: {
      version: "0.53",
      enabled: true,
    },
    versions: [
      {
        name: "1.0.0-rc3",
        recommended_version: "1.0.0-rc3",
        compatible_versions: ["1.0.0-rc3"],
        cosmos_sdk_version: "0.50.10",
        consensus: {
          type: "cometbft",
          version: "0.38",
        },
        sdk: {
          type: "cosmos",
          version: "0.50.10",
        },
        cosmwasm: {
          version: "0.53",
          enabled: true,
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: "7e061edecef73a700b699c785f61a44ca981ff7f",
        address: "34.150.103.79:26656",
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: "https://rpc.dukong.mantrachain.io",
        provider: "MANTRACHAIN",
      },
    ],
    rest: [
      {
        address: "https://api.dukong.mantrachain.io",
        provider: "MANTRACHAIN",
      },
    ],
    grpc: [
      {
        address: "https://grpc.dukong.mantrachain.io",
        provider: "MANTRACHAIN",
      },
    ],
  },
  logo_URIs: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg",
  },
  explorers: [
    {
      kind: "mintscan",
      url: "https://www.mintscan.io/mantra-testnet",
      tx_page: "https://mintscan.io/mantra-testnet/txs/${txHash}",
      account_page:
        "https://mintscan.io/mantra-testnet/account/${accountAddress}",
    },
    {
      kind: "ping.pub",
      url: "https://explorer.mantrachain.io",
      tx_page: "https://explorer.mantrachain.io/MANTRA-Dukong/tx/${txHash}",
      account_page:
        "https://explorer.mantrachain.io/MANTRA-Dukong/account/${accountAddress}",
    },
  ],
  keywords: ["rwa", "wasm", "staking", "testnet"],
  images: [
    {
      image_sync: {
        chain_name: "mantrachain",
        base_denom: "uom",
      },
      png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png",
      svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg",
      theme: {
        circle: false,
        primary_color_hex: "#fba0c1",
      },
    },
  ],
};

export default chain;