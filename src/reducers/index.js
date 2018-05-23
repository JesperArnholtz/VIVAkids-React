// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";


import NavigationReducer from './navigationReducer';
import BlogsReducer from './blogsReducer';
import AssetsReducer from './assetReducer';
import count from "./counter";
// import secondCounter from './exampleReducer';

export default combineReducers({ 
    blogs: BlogsReducer,
    assets: AssetsReducer,
    count,
    links: NavigationReducer
});

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
