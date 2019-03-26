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
import MovieScreen from './components/screens/MovieScreen'
import MusicScreen from './components/screens/MusicScreen'
import ShowScreen from './components/screens/ShowScreen'
import MovieDetails from './components/screens/MovieDetails'
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'

const TabNavigator = createMaterialTopTabNavigator({
  Movies: MovieScreen,
  Shows: ShowScreen,
  Music: MusicScreen
});

const StackNavigator = createStackNavigator({
  Home: { screen: TabNavigator},
  MovieDetails: {screen: MovieDetails},

});

const App = createAppContainer(StackNavigator);

export default App;