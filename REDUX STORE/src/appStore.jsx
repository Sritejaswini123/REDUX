import {configureStore, createReducer} from "@reduxjs/toolkit"


const appStore = configureStore({
    reducer: {  //app reducer
        cart: createReducer,
        user: userReducer
    }
});
 
export default appStore    