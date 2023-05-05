import initialState from "../../constanta.js"

const counterReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'ACTION_INC':
            return{
                ...state,
                count: state.count + actions.value
            } 

        case 'ACTION_DEC':
            return{
                ...state,
                count: state.count + actions.value
            }

        default :
            return state
    }
}

export default counterReducer