import {SEARCH_USER, SEARCHED_USER} from './const'

const searchUser = (name) => {
    return {
        type: SEARCH_USER,
        payload: name,
        searching: false,
        error: false,
        dataSearch: {}
    }
}

const searchedUser = (dataSearch) => {
    return {
        type: SEARCHED_USER,
        payload: dataSearch,
        searching: false,
        error: false,
        users: []
    }
}

export {searchUser, searchedUser}