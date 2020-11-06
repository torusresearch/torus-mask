const defaultNetworksData = [
  {
    labelKey: 'mainnet',
    iconColor: '#cde0ff',
    providerType: 'mainnet',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/mainnet',
    chainId: '1',
    ticker: 'ETH',
    blockExplorerUrl: 'https://etherscan.io',
  },
  {
    labelKey: 'ropsten',
    iconColor: '#ffd9f8',
    providerType: 'ropsten',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/ropsten',
    chainId: '3',
    ticker: 'ETH',
    blockExplorerUrl: 'https://ropsten.etherscan.io',
  },
  {
    labelKey: 'rinkeby',
    iconColor: '#caf1fe',
    providerType: 'rinkeby',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/rinkeby',
    chainId: '4',
    ticker: 'ETH',
    blockExplorerUrl: 'https://rinkeby.etherscan.io',
  },
  {
    labelKey: 'goerli',
    iconColor: '#ffe1d4',
    providerType: 'goerli',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/goerli',
    chainId: '5',
    ticker: 'ETH',
    blockExplorerUrl: 'https://goerli.etherscan.io',
  },
  {
    labelKey: 'kovan',
    iconColor: '#b7f7e9',
    providerType: 'kovan',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/kovan',
    chainId: '42',
    ticker: 'ETH',
    blockExplorerUrl: 'https://etherscan.io',
  },
  {
    labelKey: 'localhost',
    iconColor: 'white',
    border: '1px solid #6A737D',
    providerType: 'localhost',
    rpcUrl: 'http://localhost:8545/',
    blockExplorerUrl: 'https://etherscan.io',
  },
]

export {
  defaultNetworksData,
}
