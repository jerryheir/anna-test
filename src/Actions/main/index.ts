import * as actionTypes from "../types";
import dummyData from "../../../dummyData/applications.json";

export const fetchData = () => (dispatch: any, getState: any) => {
  let getUniqueValues: any = [];
  dummyData.forEach((item)=>{
    const i = getUniqueValues.findIndex((value: any)=>value.restaurant.id === item.restaurant.id);
    if(i <= -1){
      const getRelatedCount = dummyData.filter((val: any)=>val.restaurant.id === item.restaurant.id);
      // getting the total so I can get the amount of application on each restaurants using .length
      // also need to separate them properly so I can be able to pass data properly between screens
      // I will not do this in the components to avoid re-render in full scale application
      getUniqueValues = [...getUniqueValues, { ...item, total: getRelatedCount.length, applications: getRelatedCount }];
    }
  })
  dispatch({
      type: actionTypes.FETCH_DATA,
      payload: { restaurants: getUniqueValues, data: dummyData }
  })
}

export const setViewed = (item: any, array: Array<any>) => (dispatch: any, getState: any) => {
  const { viewed } = getState().main;
  const scrollIndex = array.findIndex((val: any)=>val.id === item.id);
  const applicationExistId = viewed.findIndex((value: string)=>value === item.id);
  if (applicationExistId <= -1){
    dispatch({
      type: actionTypes.SET_VIEWED,
      payload: { viewed: [...viewed, item.id], viewList: array, scrollIndex }
    })
  } else {
    dispatch({
      type: actionTypes.SET_VIEWED,
      payload: { viewed, viewList: array, scrollIndex }
    })
  }
}