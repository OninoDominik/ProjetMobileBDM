import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, FlatList } from 'react-native';
import MovieListItem from './ShowListItem';
import { shows } from '../../ressources/database/show.js'

export default class ShowScreen extends Component {
    constructor(props) {
        super(props)
     }
 
     onItemClick = (item) => {
         this.props.navigation.navigate('ShowDetails', { show: item })
     }
 
     render() {
        return (
            <View>
                <FlatList
                data={ shows }
                renderItem={({item}) => <MovieListItem item={item} onItemClick={this.onItemClick}/>}
                />
            </View>
        );
     }
}