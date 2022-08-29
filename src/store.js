import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./redux/reducers/reducer";
export const store = configureStore({
  reducer: cartReducer,
});

// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });

// import { createStore } from "redux";
// import rootred from "./redux/reducers/main";

// const store = createStore(
//     rootred
// );

// export default store;
