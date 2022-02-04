import {USER_LOGIN, USER_UNLOGIN} from './const'

const userLogin = (data) => {
    return {
        type: USER_LOGIN,
        payload: data,
        loading: true,
        token: {},
        login:false
    }
}

const userUnlogin = () => {
    return {
        type: USER_UNLOGIN,
        payload: {},
        loading: false,
        token: {},
        login:false
    }
}

export {userLogin, userUnlogin}