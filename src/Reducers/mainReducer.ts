import * as actionTypes from "../Actions/types";
  
const initalState = {
    restaurants: [],
    data: [],
    viewed: [],
    viewList: [],
    scrollView: 0
};
  
const mainReducers = (state = initalState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.FETCH_DATA: {
            return {
                ...state,
                ...payload
            };
        }
        case actionTypes.SET_VIEWED: {
            return {
                ...state,
                ...payload
            };
        }
        default:
            return state;
    }
  };
  
  export default mainReducers;