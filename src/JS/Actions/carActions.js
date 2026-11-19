import axios from "axios";
import {
  ADD_CAR_ERROR,
  ADD_CAR_LOADING,
  ADD_CAR_SUCCESS,
  DELETE_CAR_ERROR,
  DELETE_CAR_LOADING,
  DELETE_CAR_SUCCESS,
  EDIT_CAR_ERROR,
  EDIT_CAR_LOADING,
  EDIT_CAR_SUCCESS,
  GET_CAR_BY_ID_ERROR,
  GET_CAR_BY_ID_LOADING,
  GET_CAR_BY_ID_SUCCESS,
  GET_CARS_ERROR,
  GET_CARS_LOADING,
  GET_CARS_SUCCESS,
} from "../ActionTypes/carActionTypes";

export const getAllCars = () => async (dispatch) => {
  dispatch({ type: GET_CARS_LOADING });
  try {
    const result = await axios.get("/api/cars");
    dispatch({ type: GET_CARS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CARS_ERROR, payload: error.response.data });
  }
};

export const getCarById = (id) => async (dispatch) => {
  dispatch({ type: GET_CAR_BY_ID_LOADING });
  try {
    const result = await axios.get(`/api/cars/${id}`);
    dispatch({ type: GET_CAR_BY_ID_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: GET_CAR_BY_ID_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteCar = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CAR_LOADING });
  try {
    const result = await axios.delete(`/api/cars/${id}`);
    dispatch({ type: DELETE_CAR_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: DELETE_CAR_ERROR, payload: error.response.data });
  }
};

export const addCar = (newCar) => async (dispatch) => {
  dispatch({ type: ADD_CAR_LOADING });
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const result = await axios.post("/api/cars", newCar, config);
    dispatch({ type: ADD_CAR_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: ADD_CAR_ERROR, payload: error.response.data });
  }
};

export const editCar = (id, newData) => async (dispatch) => {
  dispatch({ type: EDIT_CAR_LOADING });
  try {
    const result = await axios.put(`/api/cars/${id}`, newData);
    dispatch({ type: EDIT_CAR_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: EDIT_CAR_ERROR, payload: error.response.data });
  }
};
