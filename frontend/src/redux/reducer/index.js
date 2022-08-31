const initialState = {
    names :[]
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'GET-BRANDS':
            return{
                ...state,
                names : action.payload
            }
        
        default:
            return state;
    }
}
export {
    rootReducer
}