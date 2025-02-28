import React, { useEffect, useMemo, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import TransactionDescribing from '../../../../common/data/models/Transactions/Interfaces'
import useAccountShellFromRoute from '../../../../utils/hooks/state-selectors/accounts/UseAccountShellFromNavigation'
import sampleTransactions from '../../Details/SampleTransactions'
import CurrentTotalHeader from '../../../../components/account-settings/transaction-reassignment/CurrentTotalHeader'
import TransactionsList from '../../../../components/account-settings/transaction-reassignment/TransactionsList'
import XPubSourceKind from '../../../../common/data/enums/XPubSourceKind'
import CurrencyKind from '../../../../common/data/enums/CurrencyKind'
import ButtonBlue from '../../../../components/ButtonBlue'

export type Props = {
  navigation: any;
};

const SelectReassignableTransactionsScreen: React.FC<Props> = ( { navigation, }: Props ) => {
  const accountShell = useAccountShellFromRoute( navigation )
  const [ selectedTransactionIDs, setSelectedTransactionIDs ] = useState<Set<string>>( new Set() )
  const [ selectableTransactions, setSelectableTransactions ] = useState<TransactionDescribing[]>( [] )

  const canProceed = useMemo( () => {
    return selectedTransactionIDs.size > 0
  }, [ selectedTransactionIDs ] )

  const selectedTransactions = useMemo( () => {
    return selectableTransactions.filter( transaction => selectedTransactionIDs.has( transaction.txID ) )
  }, [ selectedTransactionIDs ] )


  useEffect( () => {
    // TODO: Devise some way to load selectable "anonymous" transactions for the
    // current account shell.
    setSelectableTransactions( sampleTransactions )
  }, [ accountShell ] )


  function handleTransactionSelection( transaction: TransactionDescribing ) {
    if ( selectedTransactionIDs.has( transaction.txID ) ) {
      selectedTransactionIDs.delete( transaction.txID )
    } else {
      selectedTransactionIDs.add( transaction.txID )
    }

    setSelectedTransactionIDs( new Set( selectedTransactionIDs ) )
  }

  function handleProceedButtonPress() {
    navigation.navigate( 'ReassignTransactionsSelectDestination', {
      accountShellID: accountShell.id,
      reassignmentKind: XPubSourceKind.ANONYMOUS,
      selectedTransactionIDs: Array.from( selectedTransactionIDs ),
    } )
  }

  return (
    <View style={styles.rootContainer}>
      <CurrentTotalHeader accountShell={accountShell} selectedTransactions={selectedTransactions} />

      <View>
        <TransactionsList
          currencyKind={CurrencyKind.BITCOIN}
          selectableTransactions={selectableTransactions}
          selectedTransactionIDs={selectedTransactionIDs}
          onTransactionSelected={handleTransactionSelection}
        />
      </View>

      <View style={styles.proceedButtonContainer}>
        <ButtonBlue
          buttonText="Proceed"
          handleButtonPress={handleProceedButtonPress}
          buttonDisable={canProceed === false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create( {
  rootContainer: {
    flex: 1,
  },

  proceedButtonContainer: {
    zIndex: 2,
    elevation: 2,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
} )

export default SelectReassignableTransactionsScreen
