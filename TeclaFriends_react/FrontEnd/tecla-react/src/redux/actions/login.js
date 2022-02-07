import {USER_LOGIN, USER_UNLOGIN, USER_SAVE_DATA, USER_LOGIN_CHECK} from './const'

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

const userSaveData = (data) => {
    return {
        type: USER_SAVE_DATA,
        payload: data,
        loading: false,
        token: {},
        login:false
    }
}

const userLoginCheck = (actualToken) => {
    return {
        type: USER_LOGIN_CHECK,
        payload: actualToken,
        loading: false,
        data: {},
        login:false
    }
}

export {userLogin, userUnlogin, userSaveData, userLoginCheck}