import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native'
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import PasswordGenerator from './components/PasswordGenerator';
import CurrencyConverter from './components/CurrencyConverter';
import Rollthedice from './components/Rollthedice';

function App(){
  return(
    <SafeAreaView>
    <ScrollView>
      {/* <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/> */}
      <PasswordGenerator/>
      <Rollthedice/>
      <CurrencyConverter/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default App;