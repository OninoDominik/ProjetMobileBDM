import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomText from './CustomText';


export default class Page2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <CustomText text='page2 !!' color="#890007"/>
            </View>
        );
    }
}