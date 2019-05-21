import React,{Component} from 'react'
import {Text} from 'react-native'

export default class customText extends Component{
    render() {
        const { text, color}= this.props
        return (
        <Text style={{color :color, fontSize: 34}}>{text}</Text>
        )
    }
}