const initialState = {
    names :[],
    phoneByBrand: []
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'GET-BRANDS':
            return {
                ...state,
                names: action.payload
            }
        case 'SEARCH_BY_BRAND':
            return {
                ...state,
                namphoneByBrandes: action.payload
            }

        default:
            return state;
    }
}
export {
    rootReducer
}