import React from 'react'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image, UserBlock } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import { Ifo } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const StyledHeader = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo: Ifo[] = ifosConfig.filter((ifo) => ifo.isActive)

const ActiveIfo = () => {
  const TranslateString = useI18n()
  const { account, connect, reset } = useWallet()

  return (
    <div>
      <IfoCards>
        {activeIfo.map((ifo) => (
          <IfoCard key={ifo.id} ifo={ifo} />
        ))}
      </IfoCards>
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to take part')}</Title>
          <Heading mb="16px">{TranslateString(999, 'Before Pre-Sale')}:</Heading>
          <List>
            <li>{TranslateString(999, 'Buy BNB')}</li>
            <li>{TranslateString(999, 'Wait for the pre-sale to start')}</li>
          </List>
          <Heading mb="16px">{TranslateString(999, 'During Pre-Sale')}:</Heading>
          <List>
            <li>{TranslateString(999, 'While the sale is live, press the Buy button and input the amount of BNB')}</li>
            <li>{TranslateString(999, 'Confirm the transaction in your wallet')}</li>
            <li>{TranslateString(999, 'Min amount 0.2 BNB')}</li>
            <li>{TranslateString(999, 'Max Amount 10 BNB')}</li>
          </List>
          <Heading mb="16px">{TranslateString(999, 'After Pre-Sale')}:</Heading>
          <List>
            <li>{TranslateString(999, 'Tokens will distribute to your wallet after the pre-sale')}</li>
            {/* <li>{TranslateString(606, 'Claim the tokens you bought, along with any unspent funds.')}</li>
            <li>{TranslateString(608, 'Done!')}</li> */}
          </List>
          {/* <Text as="div" pt="16px">
            <Button
              as="a"
              variant="secondary"
              href="https://docs.pancakeswap.finance/core-products/ifo-initial-farm-offering"
            >
              {TranslateString(610, 'Read more')}
            </Button>
          </Text> */}
        </div>
        <div>
          <Image src="/images/cash/rocket.png" alt="pre-sale rocket" width={400} height={350} responsive />
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default ActiveIfo
