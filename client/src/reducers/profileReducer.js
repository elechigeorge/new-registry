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

export const getAllProfilesReducer = (state = { profiles: [] }, action) => {
    switch (action.type) {
        case ADMIN_GET_PROFILE_REQUEST:
            return { loading: true, profiles: [] }
        case ADMIN_GET_PROFILE_SUCCESS:
            return {
                loading: false,
                profiles: action.payload,
            }
        case ADMIN_GET_PROFILE_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getProfileReducer = (
    state = { profile: {} },
    action
) => {
    switch (action.type) {
        case USER_GET_PROFILE_REQUEST:
            return { loading: true, profile: {} }
        case USER_GET_PROFILE_SUCCESS:
            return { loading: false, profile: action.payload }
        case USER_GET_PROFILE_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const profileCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATE_PROFILE_REQUEST:
            return { loading: true }
        case USER_CREATE_PROFILE_SUCCESS:
            return { loading: false, success: true, profile: action.payload }
        case USER_CREATE_PROFILE_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
