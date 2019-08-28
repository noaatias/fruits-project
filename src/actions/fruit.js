import axios from 'axios';
import {
    GET_FRUITS,
    FRUIT_ERROR,
    EDIT_FRUIT,
    REMOVE_TO_FAVORITE,
    ADD_NUTRIOTION,GET_FRUIT_DATA,REMOVE_NUTRIOTION, ADD_TO_FAVORITE
} from './types';
import data from '../api/fruits.json';
export const getFruitData = fruit => async dispatch => {
    console.log(fruit)
    try {
      dispatch({
        type: GET_FRUIT_DATA,
        payload:fruit
      });
    } catch (err) {
      dispatch({
        type: FRUIT_ERROR
      });
    }
  };
//get fruits
export const getFruits=()=>async dispatch=>{
    try {
        // const res= await axios.get(jsonFruits);
        console.log(data)
        dispatch({
            type:GET_FRUITS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:FRUIT_ERROR,
            payload: {
                msg: error.response.statusText,status:error.response.status
            }
        })
    }
}
//edit exist vacation

  export const addFruit = (fruit,formData) => async dispatch => {
      console.log('bb')
console.log(formData,fruit)
    try {
      
      dispatch({
        type: ADD_NUTRIOTION,
        payload: fruit
      });
       } catch (err) {
      dispatch({
        type: FRUIT_ERROR
      });
    }
  };
  export const removeFruit = (fruit) => async dispatch => {
    console.log('reb')
console.log(fruit)
  try {
    
    dispatch({
      type: REMOVE_NUTRIOTION,
      payload: fruit
    });
     } catch (err) {
    dispatch({
      type: FRUIT_ERROR
    });
  }
};
export const addFavorite = (favorite) => async dispatch => {
    console.log('bb')
console.log(favorite)
  try {
    
    dispatch({
      type: ADD_TO_FAVORITE,
      payload: favorite
    });
     } catch (err) {
    dispatch({
      type: FRUIT_ERROR
    });
  }
  console.log(favorite)
};
export const removeFavorite = (favorite) => async dispatch => {
  console.log('bbtatat')
console.log(favorite)
try {
  
  dispatch({
    type: REMOVE_TO_FAVORITE,
    payload: favorite
  });
   } catch (err) {
  dispatch({
    type: FRUIT_ERROR
  });
}
console.log(favorite)
};