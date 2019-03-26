import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, FlatList } from 'react-native';
import MusicListItem from './MusicListItem';
import { music } from '../../ressources/database/music.js'


export default class MusicScreen extends Component {
   constructor(props) {
       super(props)
   }

   render() {
       return (
           <View>
               <FlatList
               data={ music }
               renderItem={({item}) => <MusicListItem title={item.title} group={item.group} 
                    date={item.date} album={item.album} genre={item.genre} imgSrc={item.imgSrc}/>}
               />
           </View>
       );
   }

}
