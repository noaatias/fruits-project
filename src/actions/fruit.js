import axios from "axios";
import {
  GET_FRUITS,
  FRUIT_ERROR,
  REMOVE_TO_FAVORITE,
  ADD_NUTRIOTION,
  GET_FRUIT_DATA,
  REMOVE_NUTRIOTION,
  ADD_TO_FAVORITE
} from "./types";
import data from "../api/fruits.json";
//get specific fruit
export const getFruitData = fruit => async dispatch => {
  try {
    dispatch({
      type: GET_FRUIT_DATA,
      payload: fruit
    });
  } catch (err) {
    dispatch({
      type: FRUIT_ERROR
    });
  }
};
//get fruits
export const getFruits = () => async dispatch => {
  try {
    dispatch({
      type: GET_FRUITS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: FRUIT_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};
//add fruit

export const addFruit = (fruit, formData) => async dispatch => {
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

//remove fruit
export const removeFruit = fruit => async dispatch => {
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
//add to favorite
export const addFavorite = favorite => async dispatch => {
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
};
//remove from favorite
export const removeFavorite = favorite => async dispatch => {
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
};
