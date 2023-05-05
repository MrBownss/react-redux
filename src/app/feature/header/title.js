let title = 'javaScript'

const counterReducer = (state = title, actions) => {
    switch (actions.type) {
        case 'OFF':
            return actions.value

        default :
            return state
    }
}

export default counterReducer