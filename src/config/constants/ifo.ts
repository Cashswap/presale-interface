import { Ifo } from './types'

const ifos: Ifo[] = [
  {
    id: 'cswap',
    address: {
      56: '0x73bC83ABc262f7657E4743A4d42c531dA5EF6F81',
      97: '0x73bC83ABc262f7657E4743A4d42c531dA5EF6F81',
    },
    isActive: true,
    name: 'CashSwap',
    token: 'CSWAP',
    subTitle: 'CashSwap is the Utility Token for the users of CashSwap Platform.',
    description: 'Exclusive Payment Coin For Ground Breaking NFT Marketplace.',
    saleAmount: '3000000000',
    projectSiteUrl: 'https://cashswap.exchange',
    currency: 'BNB',
    currencyAddress: '0x3a74ce98191a540aec23e2e05ce04d05102499cf',
    tokenDecimals: 18,
    maxContribution: '10',
    minContribution: '0.2',
  },
  {
    id: 'block',
    address: {
      56: '0xb1B58e54560F93871a1a96323082E34E716dF680',
      97: '0xb1B58e54560F93871a1a96323082E34E716dF680',
    },
    isActive: true,
    name: 'CashBlock',
    token: 'BLOCK',
    subTitle: 'CashBlock is the Bonus Token For CashSwap.',
    description: "World Wide ATM's where you can buy and sell Cash Block for local currency.",
    saleAmount: '1000',
    projectSiteUrl: 'https://cashblock.io',
    currency: 'BNB',
    currencyAddress: '0x1c4e5a863884e7bf4d764890038646297d4b42f7',
    tokenDecimals: 18,
    maxContribution: '10',
    minContribution: '0.2',
  },
]

export default ifos
