import React,{Component} from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity, Alert} from 'react-native';

class ListCard extends Component{
    render(){
        const {ImageStyle,CardStyle,TextStyle,BtnStyle}=styles;
        const {image,text,detailsOnPress}=this.props;
        if(text==''){
            return (
                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>No Author Found</Text>
            );
        }
        return(
            <View style={CardStyle}>
                <Image style={ImageStyle} source={{uri:image}}/>
                <View>
                    <Text style={TextStyle}>{text}</Text>
                </View>
                <TouchableOpacity style={BtnStyle} onPress={detailsOnPress}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>View Details</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    ImageStyle:{
        height:300,
        width:'100%',
        alignSelf:'center',
    },
    CardStyle:{
        backgroundColor:'lightblue',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        borderWidth:2,
        borderColor:'white',
        marginVertical:10,
    },
    TextStyle:{
        height:50,
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:30,
        color:'black',
    },
    BtnStyle:{
        backgroundColor:'green',
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
});

export {ListCard};