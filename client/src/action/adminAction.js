import api from '../utils/api'
import {
    ADMIN_LOGIN_FAILED,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT,

    ADMIN_REGISTER_FAILED,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,

} from '../constants/types'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await api.post(
            '/admin/login',
            { email, password },
            config
        )

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('adminInfo')

    dispatch({ type: ADMIN_LOGOUT })

    document.location.href = '/admin/login'
}


export const register = (staffId, name, email, role, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await api.post(
            '/admin',
            { staffId, name, email, role, password },
            config
        )

        dispatch({
            type: ADMIN_REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_REGISTER_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}