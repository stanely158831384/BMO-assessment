import { createStore } from "redux";
const counterReducer = (state = { db: {docs:[]} }, action) => {
  if(action.type === "addData"){
    return {db: action.value}
  }
  if(action.type === "clear"){
      return {db: {}}
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
