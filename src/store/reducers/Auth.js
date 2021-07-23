import * as ActionTypes from "../action-types"
import propTypes from 'prop-types'

const initialState = {
    isAuthenticated: false,
    isAdmin: false,
    ingresomes: "199001",
    permissions: [],
    roles: []
}

const Auth = (state = initialState, { type, payload = null }) => {
    switch (type) {
        case ActionTypes.AUTH_LOGIN:
            return authLogin(state, payload)
        case ActionTypes.AUTH_CHECK:
            return checkAuth(state)
        case ActionTypes.AUTH_LOGOUT:
            return logout(state)
        default:
            return state
    }
}

const authLogin = (state, payload) => {

    state = Object.assign({}, state, {
        isAuthenticated: true,
        isAdmin: "true",
        ...payload
    })

    return state
}

const checkAuth = state => {
    return {}
}

const logout = state => {

    return {}
}

Auth.propTypes = {
    type: propTypes.string.isRequired,
    payload: propTypes.object.isRequired,
}

Auth.defaultProps = {
    state: initialState,
}

export default Auth
