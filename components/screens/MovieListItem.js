import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


export default class MovieListItem extends Component{

    render() {

        const { item } = this.props

        return(
            <TouchableOpacity onPress={ () => this.onItemClick(item) }>
                <View style={styles.container}> 
                    <Image source={item.imgSrc} style={styles.image}></Image>
                    <View style={styles.infosRightSide}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>Directed by {item.director}</Text>
                        <Text>Released {item.date}</Text>
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





