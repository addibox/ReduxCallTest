const initialState = {
    data: null
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'setData':
            return {
                ...state,
                data: action.data
            }
        default: 
            return state;
    }
}

export default reducer;