import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   tokenName: 'CAKE',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   contractAddress: {
  //     97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
  //     56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
  {
    sousId: 1,
    tokenName: 'SLIME',
    stakingTokenName: QuoteToken.MOMO,
    stakingTokenAddress: '0xafb2997fe9a99022e61c7e01b974e0e3d7704b02',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x890A8a1d5e3cF7ec6e42a1E76d9e6a0896b0e49d',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://slime.finance/',
    harvest: true,
    tokenPerBlock: '0.000677',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  // {
  //   sousId: 1,
  //   tokenName: 'BRY',
  //   stakingTokenName: QuoteToken.BRY,
  //   stakingTokenAddress: '0xafb2997fe9a99022e61c7e01b974e0e3d7704b02',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0x890A8a1d5e3cF7ec6e42a1E76d9e6a0896b0e49d',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://slime.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.000677',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
]

export default pools
