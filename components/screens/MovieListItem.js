import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';


export default class MovieListItem extends Component{
    render() {

        const { title, date, imgSrc } = this.props

        return(
            <View>
                <Image source={imgSrc} style={{width:'80dp', height:'100dp'}}></Image>
                <Text>{title}</Text>
                <Text>{date}</Text>
            </View>
        )
    }
}



