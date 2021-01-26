import {createStore} from 'redux'

const info1 = { name : 'aman jat', gen :'male' };


const reducer = (state=info1,action) => {
  if(action.type=='INSERT_INFO') {
    return {
        ...state, 
        name : action.payload_name1
    }
  }
}

const store = createStore(reducer)

export default store;