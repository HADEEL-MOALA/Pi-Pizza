import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        itemInCart.lastPrice = itemInCart.quantity * itemInCart.price;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          lastPrice: action.payload.price,
        });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.lastPrice = item.price * item.quantity;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        item.lastPrice = item.lastPrice - item.price;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    emptyCart: (state, action) => {
      state.cart = [];
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  emptyCart,
} = cartSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const itemInCart = state.cart.find(
//         (item) => item.id === action.payload.id
//       );
//       if (itemInCart) {
//         itemInCart.quantity++;
//       } else {
//         state.cart.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       item.quantity++;
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       if (item.quantity === 1) {
//         item.quantity = 1;
//       } else {
//         item.quantity--;
//       }
//     },
//     removeItem: (state, action) => {
//       const removeItem = state.cart.filter(
//         (item) => item.id !== action.payload
//       );
//       state.cart = removeItem;
//     },
//   },
// });
// export const cartReducer = cartSlice.reducer;
// export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
//   cartSlice.actions;

// // const INIT_STATE = {
// //     carts: []
// // };

// // export const cartreducer = (state = INIT_STATE, action) => {
// //     switch (action.type) {
// //         case "ADD_CART":

// //         const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

// //         if(IteamIndex >= 0){
// //             state.carts[IteamIndex].qnty +=1
// //             return {
// //                 ...state,
// //                 carts:[...state.carts]
// //             }
// //         }else{
// //             const temp = {...action.payload,qnty:1}
// //              return {
// //                 ...state,
// //                 carts: [...state.carts, temp]
// //             }
// //         }

// //         case "RMV_CART":
// //             const data = state.carts.filter((el)=>el.id !== action.payload);
// //             // console.log(data);

// //             return {
// //                 ...state,
// //                 carts:data
// //             }

// //         case "RMV_ONE":
// //             const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

// //             if(state.carts[IteamIndex_dec].qnty >= 1){
// //                 const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
// //                 console.log([...state.carts,dltiteams]);

// //                 return {
// //                     ...state,
// //                     carts:[...state.carts]
// //                 }
// //             }else if(state.carts[IteamIndex_dec].qnty === 1 ){
// //                 const data = state.carts.filter((el)=>el.id !== action.payload);

// //                 return {
// //                     ...state,
// //                     carts:data
// //                 }
// //             }

// //         default:
// //             return state
// //     }
// // }
