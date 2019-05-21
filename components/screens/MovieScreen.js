import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, FlatList } from 'react-native';
import MovieListItem from './MovieListItem';
import { movies } from '../../ressources/database/movie.js'


export default class MovieScreen extends Component {
    constructor(props) {
       super(props)
    }

    onItemClick = (item) => {
        this.props.navigation.navigate('MovieDetails', { movie: item })
    }

    render() {
       return (
           <View>
               <FlatList
               data={ movies }
               renderItem={({item}) => <MovieListItem item={item} onItemClick={this.onItemClick}/>}
               />
           </View>
       );
    }

}


 