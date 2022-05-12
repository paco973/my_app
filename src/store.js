import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    projectListReducer,
    projectDetailsReducer,
    projectDeleteReducer,
    projectCreateReducer,
    projectUpdateReducer,
    projectReviewCreateReducer,
} from './reducer/projectReducers'

// import { cartReducer } from './reducers/cartReducers'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
    userCurentReducer
} from './reducer/userReducers'

import {
    skillCreateReducer,
    skillDeleteReducer,
    skillDetailsReducer,
    skillListReducer, skillReviewCreateReducer, skillTopRatedReducer,
    skillUpdateReducer
} from "./reducer/skillReducers";

// import {
//     orderCreateReducer,
//     orderDetailsReducer,
//     orderPayReducer,
//     orderListMyReducer,
//     orderListReducer,
//     orderDeliverReducer,
// } from './reducers/orderReducers'

const reducer = combineReducers({
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
    projectDelete: projectDeleteReducer,
    projectCreate: projectCreateReducer,
    projectUpdate: projectUpdateReducer,
    projectReviewCreate: projectReviewCreateReducer,



    skillList: skillListReducer,
    skillDetails: skillDetailsReducer,
    skillDelete: skillDeleteReducer,
    skillCreate: skillCreateReducer,
    skillUpdate: skillUpdateReducer,
    skillReviewCreate: skillReviewCreateReducer,
    skillTopRated: skillTopRatedReducer,


    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userCurent: userCurentReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    // orderCreate: orderCreateReducer,
    // orderDetails: orderDetailsReducer,
    // orderPay: orderPayReducer,
    // orderListMy: orderListMyReducer,
    // orderList: orderListReducer,
    // orderDeliver: orderDeliverReducer,
})


// const cartItemsFromStorage = localStorage.getItem('cartItems') ?
//     JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


// const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
//     JSON.parse(localStorage.getItem('shippingAddress')) : {}
//

const initialState = {
    // cart: {
    //     cartItems: cartItemsFromStorage,
    //     shippingAddress: shippingAddressFromStorage,
    // },
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store