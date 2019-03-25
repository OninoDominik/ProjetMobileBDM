import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, FlatList } from 'react-native';
import CustomText from '../CustomText';


export default class MovieScreen extends Component {
    constructor(props) {
        super(props)
    }  

    render() {
        return (
            <View>
                <FlatList
                data={[{key: 'a', text:'Je suis l\'element A!'}, {key: 'b', text:'Je suis l\'element B!'}]}
                renderItem={({item}) => <View><Text>{item.key}</Text><Text>{item.text}</Text></View>}
                />
            </View>
        );
    }
      
}  


 