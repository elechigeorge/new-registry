import api from '../utils/api'
import {
    USER_CREATE_ACADEMICS_REQUEST,
    USER_CREATE_ACADEMICS_FAILED,
    USER_CREATE_ACADEMICS_SUCCESS,
    USER_GET_ACADEMICS_FAILED,
    USER_GET_ACADEMICS_REQUEST,
    USER_GET_ACADEMICS_SUCCESS,
    ADMIN_GET_ACADEMICS_FAILED,
    ADMIN_GET_ACADEMICS_REQUEST,
    ADMIN_GET_ACADEMICS_SUCCESS
} from '../constants/types'
import { logout } from './userAction'

export const getAcademic = () => async (dispatch, getState) => {
    try {

        dispatch({ type: USER_GET_ACADEMICS_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                "auth-token": `${userInfo.token}`,
            },
        }

        const { data } = await api.get("/academic", config)

        dispatch({
            type: USER_GET_ACADEMICS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_GET_ACADEMICS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const createAcademics = (academics) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_CREATE_ACADEMICS_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                "auth-token": `${userInfo.token}`,
            },
        }

        const { data } = await api.post(`/academic`, academics, config)

        dispatch({
            type: USER_CREATE_ACADEMICS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: USER_CREATE_ACADEMICS_FAILED,
            payload: message,
        })
    }
}

export const getAllAcademics = () => async (dispatch, getState) => {
    try {

        dispatch({ type: ADMIN_GET_ACADEMICS_REQUEST })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                "auth-token": `${adminInfo.token}`,
            },
        }

        const { data } = await api.get("/academic/get", config)

        dispatch({
            type: ADMIN_GET_ACADEMICS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_GET_ACADEMICS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
