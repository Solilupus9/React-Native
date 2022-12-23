import { SEARCH_BOX_UPDATED,UPDATE_IMAGE_LIST,TOGGLE_LOADER,FILTER_IMAGE_LIST } from "./ActionTypes";
import axios from "axios";

export const SearchBoxValueChanged=(image_list,search)=>{
    return dispatch=>{
        var f_image_list=image_list.filter(function(image_data){
            return image_data.author.includes(search,0);
        });
        dispatch({
            type:SEARCH_BOX_UPDATED,
            payload:search,
        });
        dispatch({
            type:FILTER_IMAGE_LIST,
            payload:f_image_list,
        });
    };
}

export const GetImageListFromAPI=()=>{
    return (dispatch)=>{
        dispatch({
            type:TOGGLE_LOADER,
            payload:true,
        });
        axios.get('https://picsum.photos/v2/list')
        .then(response=>{
            dispatch({
                type:UPDATE_IMAGE_LIST,
                payload:response.data,
            });
            dispatch({
                type:TOGGLE_LOADER,
                payload:false,
            });
            dispatch({
                type:FILTER_IMAGE_LIST,
                payload:response.data,
            });
        })
        .catch(error=>{
            console.log(error);
            dispatch({
                type:TOGGLE_LOADER,
                payload:false,
            });
        })
    };
}

export const ToggleImageLoader=show=>{
    return{
        type:TOGGLE_LOADER,
        payload:show,
    }
}