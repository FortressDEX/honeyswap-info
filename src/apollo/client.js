import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { SupportedNetwork } from "../constants";

export const clients = {
  // [SupportedNetwork.MAINNET]: new ApolloClient({
  //   link: new HttpLink({
  //     // TODO: change this when release day comes
  //     uri: "https://api.thegraph.com/subgraphs/name/luzzif/swapr-mainnet-alpha",
  //   }),
  //   cache: new InMemoryCache(),
  //   shouldBatch: true,
  // }),
  [SupportedNetwork.XDAI]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/candleplatforms/honeyswap-xdai",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
  [SupportedNetwork.MATIC]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/candleplatforms/honeyswap-polygon",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
  [SupportedNetwork.CANDLE]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/candleplatforms/honeyswap-candle",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
};

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/index-node/graphql",
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
});

export const blockClients = {
  // [SupportedNetwork.MAINNET]: new ApolloClient({
  //   link: new HttpLink({
  //     uri:
  //       "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks",
  //   }),
  //   cache: new InMemoryCache(),
  // }),
  [SupportedNetwork.XDAI]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/candleplatforms/xdai-blocks",
    }),
    cache: new InMemoryCache(),
  }),
  [SupportedNetwork.MATIC]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/candleplatforms/matic-blocks",
    }),
    cache: new InMemoryCache(),
  }),
  [SupportedNetwork.CANDLE]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/candleplatforms/candle-blocks",
    }),
    cache: new InMemoryCache(),
  }),
};
