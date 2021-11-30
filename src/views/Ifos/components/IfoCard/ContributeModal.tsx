import React, { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import { Modal, Button, Flex, LinkExternal } from '@pancakeswap-libs/uikit'
import BalanceInput from 'components/Input/BalanceInput'
import useRefresh from 'hooks/useRefresh'
import { getFullDisplayBalance } from 'utils/formatBalance'
import useTokenBalance from 'hooks/useTokenBalance'
import useWeb3 from 'hooks/useWeb3'
import { getWeb3 } from 'utils/web3'

interface Props {
  currency: string
  contract: any
  currencyAddress?: string
  onDismiss?: () => void
}

const useBNBBalance = () => {
  const [balance, setBalance] = useState('0')
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const web3 = getWeb3()
    const fetchBalance = async () => {
      const res = await web3.eth.getBalance(account)
      setBalance(res)
    }

    if (account) {
      fetchBalance()
    }
  }, [account, fastRefresh])

  return balance
}

const ContributeModal: React.FC<Props> = ({ currency, contract, onDismiss }) => {
  const [value, setValue] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const web3 = useWeb3()

  const balance = useBNBBalance()

  return (
    <Modal title={`Contribute ${currency}`} onDismiss={onDismiss}>
      <BalanceInput
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        symbol={currency}
        max={getFullDisplayBalance(new BigNumber(balance))}
        onSelectMax={() => setValue(new BigNumber(balance).div(new BigNumber(10).pow(18)).toString())}
      />
      <Flex justifyContent="space-between" mb="24px">
        <Button fullWidth variant="secondary" onClick={onDismiss} mr="8px">
          Cancel
        </Button>
        <Button
          fullWidth
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await web3.eth.sendTransaction({
              from: account,
              to: contract._address,
              value: new BigNumber(value).times(new BigNumber(10).pow(18)).toString(),
            })
            setPendingTx(false)
            onDismiss()
          }}
        >
          Confirm
        </Button>
      </Flex>
      <LinkExternal
        href="https://exchange.pancakeswap.finance/#/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        style={{ margin: 'auto' }}
      >
        {`Get ${currency}`}
      </LinkExternal>
    </Modal>
  )
}

export default ContributeModal
