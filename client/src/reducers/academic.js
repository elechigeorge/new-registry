import {
    USER_CREATE_ACADEMICS_REQUEST,
    USER_CREATE_ACADEMICS_FAILED,
    USER_CREATE_ACADEMICS_SUCCESS,

    USER_GET_ACADEMICS_REQUEST,
    USER_GET_ACADEMICS_FAILED,
    USER_GET_ACADEMICS_SUCCESS,

    ADMIN_GET_ACADEMICS_FAILED,
    ADMIN_GET_ACADEMICS_REQUEST,
    ADMIN_GET_ACADEMICS_SUCCESS
} from '../constants/types'

export const getAllAcademicsReducer = (state = { academics: [] }, action) => {
    switch (action.type) {
        case ADMIN_GET_ACADEMICS_REQUEST:
            return { loading: true, academics: [] }
        case ADMIN_GET_ACADEMICS_SUCCESS:
            return {
                loading: false,
                academics: action.payload,
            }
        case ADMIN_GET_ACADEMICS_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getAcademicsReducer = (
    state = { academic: {} },
    action
) => {
    switch (action.type) {
        case USER_GET_ACADEMICS_REQUEST:
            return { ...state, loading: true }
        case USER_GET_ACADEMICS_SUCCESS:
            return { loading: false, academic: action.payload }
        case USER_GET_ACADEMICS_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const academicsCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATE_ACADEMICS_REQUEST:
            return { loading: true }
        case USER_CREATE_ACADEMICS_SUCCESS:
            return { loading: false, success: true, academic: action.payload }
        case USER_CREATE_ACADEMICS_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
