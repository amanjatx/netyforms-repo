import {createStore} from 'redux'

// const formData = [
//     {
//         name : 'Aman jat',
//         gender : 'male'
//     },
//     {
//         name : 'Ravina',
//         gender : 'female'
//     }
// ]

const formData = {
    name : 'Aman Jat'
}

const reducer = (state=formData,action) => {
  if(action.type=='CHANGE_NAME1') {
      return {
        //   ...state,
          name : action.payload
      }
  }
  else 
    return state
}

const store = createStore(reducer)

export default store;