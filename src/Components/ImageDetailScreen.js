import React,{Component} from "react";
import {View,Text,TouchableOpacity,Image} from 'react-native';

class ImageDetailScreen extends Component{
    render(){
        const {Style,ImageStyle,IDStyle,LStyle}=styles;
        return (
            <View style={{backgroundColor:'black',flex:1}}>
                <View style={{borderWidth:2,alignSelf:'center',width:'90%',marginTop:10,borderColor:'white'}}>
                    <View style={{borderBottomWidth:2,backgroundColor:'lightgrey',borderColor:'white'}}>
                        <Text style={IDStyle}>Image ID:{this.props.route.params.image_id}</Text>
                    </View>
                    <View style={{borderBottomWidth:2,backgroundColor:'lightblue',borderColor:'white'}}>
                        <Text style={Style}>Author:{this.props.route.params.image_author}</Text>
                    </View>
                    <Image style={ImageStyle} source={{uri:this.props.route.params.image_url}}/>
                    <View style={{borderTopWidth:2,borderColor:'white',backgroundColor:'lightblue'}}>
                        <Text style={LStyle}>Download URL:{this.props.route.params.image_url}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{borderTopWidth:2,borderColor:'white',backgroundColor:'green'}}>
                        <Text style={Style}>Go back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles={
    Style:{
        alignSelf:'center',
        color:'black',
        fontSize:23,
        borderColor:'white',
    },
    IDStyle:{
        alignSelf:'center',
        color:'black',
        fontSize:30,
        borderColor:'white',
    },
    LStyle:{
        alignSelf:'center',
        color:'black',
        fontSize:18,
        borderColor:'white',
    },
    ImageStyle:{
        height:300,
        width:'100%',
        alignSelf:'center',
        borderColor:'white',
    },
}

export default ImageDetailScreen;