import { SET_FILE, SET_STATUS,IS_LOADING } from "./Actions";

const initialState = {
    file:'',
    success:0,
    isloading:null,
}

function userReducer(state= initialState,action){
    switch(action.type){
        case SET_FILE:
            return {...state,file:action.payload,success:action.payload};
        case SET_STATUS:
            return {...state,success:action.payload};
        case IS_LOADING:
            return {...state,isloading:action.payload};
        default:
            return state;
    }

};


export default userReducer;
