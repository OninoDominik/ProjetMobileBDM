import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomText from './CustomText';


export default class Page3 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <CustomText text='page3 ' color="#890007"/>
            </View>
        );
    }
}