import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomText from '../CustomText';


export default class ShowScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <CustomText text='Page série!' color="#890007"/>
            </View>
        );
    }
}