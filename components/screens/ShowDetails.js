import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class ShowDetails extends Component{

    constructor(props){
        super(props)

        this.state = {
            show: this.props.navigation.getParam('show')
        }
    }

    render(){
        const {show} = this.state
        return(
            <View>
                <View style={styles.container}> 
                    <Image source={show.imgSrc} style={styles.image}></Image>
                    <View style={styles.infosRightSide}>
                        <Text style={styles.title}>{show.title}</Text>
                        <Text>Written by {show.director}</Text>
                        <Text>Running from {show.date}</Text>
                        <Text>Starring {show.actors}</Text>
                        <Text>Genre: {show.genre}</Text>
                    </View>
                </View>
                <View style={styles.containerOther}> 
                    <Text>Synopsis: {show.synopsis}</Text>
                </View>
            </View>
        )
    }
}


const styles={
    container:{
        flexDirection: 'row'
    },

    containerOther:{
        margin:15  
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
