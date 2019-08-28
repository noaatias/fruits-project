import {
    GET_FRUITS,
    FRUIT_ERROR,
    ADD_NUTRIOTION,
    REMOVE_NUTRIOTION,
    GET_FRUIT_DATA,
    ADD_TO_FAVORITE,
    REMOVE_TO_FAVORITE
}from '../actions/types';

const initialState={
     fruits:[],
     fruit:{},
     loading:true,
     error:{},
     favorites:[]

 }
 export default function(state=initialState,action){
     const {type,payload}=action;
     switch (type) {
         case GET_FRUITS:
         return{
             ...state,
             fruits:payload,
             loading:false
         }     
         case FRUIT_ERROR:
         return{
             ...state,
             fruits:payload,
             loading:false
         }
         case ADD_NUTRIOTION:
         return {
             ...state,
             fruit:{...state.fruit}
         }
         case GET_FRUIT_DATA:
         return {
             ...state,
             fruit:payload
         }
         case REMOVE_NUTRIOTION:
      return {
        ...state,
        fruit:{...state.fruit},
        loading: false
      }
      case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites:[...state.favorites,payload],
        loading: false
      };
      case REMOVE_TO_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
            favorite => console.log(favorite,payload) 
          ),  
        loading: false
      };
        default:
        return state;    
     }

 }
