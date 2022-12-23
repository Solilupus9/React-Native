import React,{Component} from "react";
import {TextInput} from 'react-native';

class SearchBar extends Component{
    render(){
        const {placeholder,onChangeText,style,value}=this.props;
        const {Style}=styles;
        return <TextInput placeholder={placeholder} placeholderTextColor='grey' style={[Style,style]} onChangeText={onChangeText} value={value} />
    }
}
const styles={
    Style:{
        color:'white',
        width:'90%',
        height:40,
        borderBottomWidth:2,
        borderColor:'green',
        alignSelf:'center',
        marginVertical:10,
    }
}

export {SearchBar};