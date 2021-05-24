import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducer,
    userRegisterReducer,
} from './reducers/userReducer';

import {
    adminLoginReducer,
    adminRegisterReducer,
} from './reducers/adminReducer';

import {
    profileCreateReducer,
    getAllProfilesReducer,
    getProfileReducer
} from './reducers/profileReducer';

import {
    academicsCreateReducer,
    getAcademicsReducer,
    getAllAcademicsReducer
} from './reducers/academic';




const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    adminLogin: adminLoginReducer,
    adminRegister: adminRegisterReducer,

    profileCreate: profileCreateReducer,
    getAllProfiles: getAllProfilesReducer,
    getProfile: getProfileReducer,

    academicsCreate: academicsCreateReducer,
    getAllAcademics: getAllAcademicsReducer,
    getAcademics: getAcademicsReducer
})



const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const adminInfoFromStorage = localStorage.getItem('adminInfo')
    ? JSON.parse(localStorage.getItem('adminInfo'))
    : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    adminLogin: { adminInfo: adminInfoFromStorage },
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;