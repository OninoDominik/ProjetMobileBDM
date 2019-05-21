import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class MusicDetails extends Component{

    constructor(props){
        super(props)

        this.state = {
            music: this.props.navigation.getParam('music')
        }
    }

    render(){
        const {music} = this.state
        return(
            <View>
                <View style={styles.container}> 
                    <Image source={music.imgSrc} style={styles.image}></Image>
                    <View style={styles.infosRightSide}>
                        <Text style={styles.title}>{music.title}</Text>
                        <Text>Group: {music.group}</Text>
                        <Text>Released: {music.date}</Text>
                        <Text>Album title: {music.album}</Text>
                        <Text>Genre: {music.genre}</Text>
                    </View>
                </View>
                <View style={styles.containerOther}> 
                    <Text>Title: {music.title}</Text>
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