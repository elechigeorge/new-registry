import api from '../utils/api'
import {
  USER_CREATE_PROFILE_REQUEST,
  USER_CREATE_PROFILE_FAILED,
  USER_CREATE_PROFILE_SUCCESS,
  USER_GET_PROFILE_FAILED,
  USER_GET_PROFILE_REQUEST,
  USER_GET_PROFILE_SUCCESS,
  ADMIN_GET_PROFILE_FAILED,
  ADMIN_GET_PROFILE_REQUEST,
  ADMIN_GET_PROFILE_SUCCESS
} from '../constants/types'
import { logout } from './userAction'

export const getProfile = () => async (dispatch, getState) => {
  try {

    dispatch({ type: USER_GET_PROFILE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "auth-token": `${userInfo.token}`,
      },
    }

    const { data } = await api.get("/profile", config)

    dispatch({
      type: USER_GET_PROFILE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_GET_PROFILE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const createProfile = (profile) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CREATE_PROFILE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "auth-token": `${userInfo.token}`,
      },
    }

    const { data } = await api.post(`/profile`, profile, config)

    dispatch({
      type: USER_CREATE_PROFILE_SUCCESS,
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
      type: USER_CREATE_PROFILE_FAILED,
      payload: message,
    })
  }
}

export const getAllProfiles = () => async (dispatch, getState) => {
  try {

    dispatch({ type: ADMIN_GET_PROFILE_REQUEST })

    const {
      adminLogin: { adminInfo },
    } = getState()

    const config = {
      headers: {
        "auth-token": `${adminInfo.token}`,
      },
    }

    const { data } = await api.get("/profile/get", config)

    dispatch({
      type: ADMIN_GET_PROFILE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ADMIN_GET_PROFILE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}