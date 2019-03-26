import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


export default class ShowListItem extends Component{

    render() {

        const { item, onItemClick } = this.props

        return(
            <TouchableOpacity onPress={ () => onItemClick(item) }>
                <View style={styles.container}> 
                    <Image source={item.imgSrc} style={styles.image}></Image>
                    <View style={styles.infosRightSide}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>Written by {item.writers}</Text>
                        <Text>Running from {item.date}</Text>
                        <Text>Starring {item.actors}</Text>
                        <Text>Genre: {item.genre}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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





