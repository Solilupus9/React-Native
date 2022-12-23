import { SEARCH_BOX_UPDATED ,UPDATE_IMAGE_LIST,TOGGLE_LOADER, FILTER_IMAGE_LIST} from "../Actions/ActionTypes";

const INITIAL_STATE={
    search:'',
    image_list:[],
    f_image_list:[],
    loader:false,
};
export default (state=INITIAL_STATE,action)=>{
    console.log(action);
    switch(action.type){
        case SEARCH_BOX_UPDATED:
            return {...state,search:action.payload};
        case UPDATE_IMAGE_LIST:
            return {...state,image_list:action.payload};
        case TOGGLE_LOADER:
            return {...state,loader:action.payload};
        case FILTER_IMAGE_LIST:
            return {...state,f_image_list:action.payload};
        default:return state;
    }
};
