import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, FlatList } from 'react-native';
import MusicListItem from './MusicListItem';
import { music } from '../../ressources/database/music.js'


export default class MusicScreen extends Component {
    constructor(props) {
        super(props)
     }
 
     onItemClick = (item) => {
         this.props.navigation.navigate('MusicDetails', { music: item })
     }
 
     render() {
        return (
            <View>
                <FlatList
                data={ music }
                renderItem={({item}) => <MusicListItem item={item} onItemClick={this.onItemClick}/>}
                />
            </View>
        );
     }
 
 }
