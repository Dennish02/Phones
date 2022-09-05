const initialState = {
    names: [],
    phoneByBrand: [],
    phone:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET-BRANDS':
            return {
                ...state,
                names: action.payload
            }
        case 'SEARCH_BY_BRAND':
            return {
                ...state,
                phoneByBrand: action.payload
            }
        case 'GET_PHONE_DETAIL':
            return {
                ...state,
                phone: action.payload
            }

        case 'DELETE_CACHE':
            return {
                ...state,
                phoneByBrand: []
            }

        default:
            return state;
    }
}
export {
    rootReducer
}