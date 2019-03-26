import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';


export default class MusicListItem extends Component{
    render() {

        const { title, group, date, album, genre, imgSrc } = this.props

        return(
            <View style={styles.container}> 
                <Image source={imgSrc} style={styles.image}></Image>
                <View style={styles.infosRightSide}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>Group: {group}</Text>
                    <Text>Released {date}</Text>
                    <Text>Album {album}</Text>
                    <Text>Genre: {genre}</Text>
                </View>
            </View>
        )
    }
}


const styles={
    container:{
        flexDirection: 'row'
    },

    image:{
        width:80,
        height:120,
        margin:15
    },
    infosRightSide:{
        margin:15
    },
    title:{
        fontSize:22
    }
}

