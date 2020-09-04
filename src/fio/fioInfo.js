/* global */
// @flow

import { type EdgeCurrencyInfo } from 'edge-core-js/types'

import { imageServerUrl } from '../common/utils'

const defaultSettings: any = {
  apiUrls: [
    'https://testnet.fioprotocol.io:443/v1/',
    'https://chaos-proxy.azurewebsites.net/v1/'
  ],
  historyNodeUrls: ['https://fiotestnet.greymass.com/v1/'],
  fioRegApiUrl: 'https://reg.az.fio.dev/public-api/',
  fioDomainRegUrl: 'https://reg.az.fio.dev/domain/',
  fioAddressRegUrl: 'https://reg.az.fio.dev/address/',
  defaultRef: 'edge',
  fallbackRef: 'edge',
  freeAddressRef: 'edgefree',
  errorCodes: {
    INVALID_FIO_ADDRESS: 'INVALID_FIO_ADDRESS',
    FIO_ADDRESS_IS_NOT_EXIST: 'FIO_ADDRESS_IS_NOT_EXIST',
    FIO_ADDRESS_IS_NOT_LINKED: 'FIO_ADDRESS_IS_NOT_LINKED'
  }
}

export const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'FIO',
  displayName: 'FIO',
  pluginId: 'fio',
  walletType: 'wallet:fio',

  defaultSettings,

  addressExplorer: 'https://explorer.fioprotocol.io/pubkey/%s',
  transactionExplorer: 'https://explorer.fioprotocol.io/transaction/%s',

  denominations: [
    // An array of Objects of the possible denominations for this currency
    {
      name: 'FIO',
      multiplier: '1000000000',
      symbol: 'ᵮ'
    }
  ],
  symbolImage: `${imageServerUrl}/fio-logo-solo-64.png`,
  symbolImageDarkMono: `${imageServerUrl}/fio-logo-solo-64.png`,
  metaTokens: []
}
