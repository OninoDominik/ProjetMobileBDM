import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class MovieDetails extends Component{

    constructor(props){
        super(props)

        this.state = {
            movie: this.props.navigation.getParam('movie')
        }
    }

    render(){
        const {movie} = this.state
        return(
            <View>
                <View style={styles.container}> 
                    <Image source={movie.imgSrc} style={styles.image}></Image>
                    <View style={styles.infosRightSide}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text>Directed by {movie.director}</Text>
                        <Text>Released {movie.date}</Text>
                        <Text>Starring {movie.actors}</Text>
                        <Text>Genre: {movie.genre}</Text>
                    </View>
                </View>
                <View style={styles.containerOther}> 
                    <Text>Synopsis: {movie.synopsis}</Text>
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
