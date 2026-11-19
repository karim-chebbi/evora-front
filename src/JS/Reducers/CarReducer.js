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

const initialState = {
  load: false,
  success: null,
  errors: null,
  cars: [],
  car: {},
};

const CarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CARS_LOADING:
      return { ...state, load: true, success: null, errors: null };

    case GET_CARS_SUCCESS:
      return {
        ...state,
        load: false,
        cars: payload.cars,
        success: payload.message,
        errors: null,
      };

    case GET_CARS_ERROR:
      return {
        ...state,
        load: false,
        success: null,
        errors: payload.message,
      };

    case GET_CAR_BY_ID_LOADING:
      return { ...state, load: true, success: null, errors: null };

    case GET_CAR_BY_ID_SUCCESS:
      return {
        ...state,
        load: false,
        car: payload.car,
        success: payload.message,
        errors: null,
      };

    case GET_CAR_BY_ID_ERROR:
      return {
        ...state,
        load: false,
        success: null,
        errors: payload.message,
      };

    case DELETE_CAR_LOADING:
      return { ...state, load: true, errors: null };

    case DELETE_CAR_SUCCESS:
      return { ...state, load: false, success: payload.message };

    case DELETE_CAR_ERROR:
      return { ...state, load: false, errors: payload.message };

    case ADD_CAR_LOADING:
      return { ...state, load: true, errors: null };

    case ADD_CAR_SUCCESS:
      return {
        ...state,
        load: false,
        cars: [payload.car, ...state.cars],
        success: payload.success,
      };

    case ADD_CAR_ERROR:
      return { ...state, load: false, errors: payload.errors };

    case EDIT_CAR_LOADING:
      return { ...state, load: true, errors: null };

    case EDIT_CAR_SUCCESS:
      return {
        ...state,
        load: false,
        car: payload.car,
        success: payload.success,
      };

    case EDIT_CAR_ERROR:
      return { ...state, load: false, errors: payload.errors };

    default:
      return state;
  }
};

export default CarReducer;
