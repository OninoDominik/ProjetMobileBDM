import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, FlatList } from 'react-native';
import MovieListItem from './MovieListItem';


export default class MovieScreen extends Component {
   constructor(props) {
       super(props)
   }

   render() {
       return (
           <View>
               <FlatList
               data={[{imgSrc: require('../../ressources/movieImages/AvengersInfinity.png'),
                   key: 'Avengers: Infinity War', text:'April 23, 2018'}, {key: 'b', text:'Je suis l\'element B!'}]}
               renderItem={({item}) => <MovieListItem title={item.title} date={item.date} imgSrc={item.imgSrc}/>}
               />
           </View>
       );
   }

}


 