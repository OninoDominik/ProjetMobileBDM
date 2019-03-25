import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomText from '../CustomText';


export default class MusicScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <CustomText text='Page musique!' color="#890007"/>
            </View>
        );
    }
}