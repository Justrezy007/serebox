import React from 'react'
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from "./Router"
import {store} from "./Redux"

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
