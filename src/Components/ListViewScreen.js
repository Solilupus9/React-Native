import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,ActivityIndicator,TouchableOpacity,} from 'react-native';
import {ListCard,SearchBar} from './common';
import {connect} from 'react-redux';
import{SearchBoxValueChanged,GetImageListFromAPI,ToggleImageLoader} from '../Actions';

class ListViewScreen extends Component{
    renderLoader(){
        if(this.props.loader){
            return <ActivityIndicator size='large' color='red' style={styles.AIndicatorStyle}/>
        }
    }
    componentDidMount(){
        this.props.GetImageListFromAPI();
    }
    render(){
        const {MainViewStyle}=styles;
        return(
            <View style={MainViewStyle}>
                <SearchBar placeholder="Search authors" onChangeText={value=>{
                        this.props.SearchBoxValueChanged(this.props.image_list,value);
                    }}
                    value={this.props.search_value}
                />
                <FlatList
                    data={this.props.f_image_list}
                    renderItem={(item)=>{
                        return(
                            <ListCard image={item.item.download_url} 
                                text={item.item.author} 
                                detailsOnPress={()=>{
                                    this.props.navigation.navigate('Image Details',{image_id:item.item.id,image_author:item.item.author,image_url:item.item.download_url})
                                }}
                            />
                        )
                    }}
                />
                {this.renderLoader()}
            </View>
        );
    }
}

const styles=StyleSheet.create({
    MainViewStyle:{
        backgroundColor:'black',
        flex:1,
    },
    AIndicatorStyle:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
    },
});

const mapStateToProps=state=>{
    return {
        search_value:state.imageList.search,
        image_list:state.imageList.image_list,
        loader:state.imageList.loader,
        f_image_list:state.imageList.f_image_list,
    };
};

export default connect(mapStateToProps,{SearchBoxValueChanged,ToggleImageLoader,GetImageListFromAPI})(ListViewScreen);