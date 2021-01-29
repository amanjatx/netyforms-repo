import {createStore} from 'redux'

const info = {
    info1 : {
        name : 'Aman Jat',
        gender : 'male'
    },
    info2 : {
        name : 'Raveena',
        gender : 'female'
    }
}


const reducer = (state=info,action) => {
    if(action.type=='INSERT_INFO') {
        return {
            ...state,
            info1 : {
                name : action.payload_name1,
                gender : action.payload_gen1
            },
            info2 : {
                name : action.payload_name2,
                gender : action.payload_gen2
            }
        }
    }
}


const store = createStore(reducer,+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;