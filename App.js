/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation'

const RootStack = createStackNavigator({
  Page1: {screen: Page1 },
  Page2: {screen: Page2 },
  Page3: {screen: Page3 }
})

const App = createAppContainer(RootStack);

export default App;