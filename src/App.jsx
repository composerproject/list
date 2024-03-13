import { useReducer } from 'react'
import './App.css'
import Input from './components/Input'
import List from './components/List'

const initialState = {
  items : [
    {
      text:"ceci est mon texte",
      id:0
    },
    {
      text:"ceci est mon autre texte",
      id:1
    },
    {
      text:"encore un autre texte !",
      id:2
    }
  ],
  lastId: 2
}

const removeItem = (arr, id) => {
  const index = arr.findIndex(item => item.id === id);  
  return [...arr.slice(0,index), ...arr.slice(index+1)];
}


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {

      case 'remove':  
        return {
          ...state,
          items: removeItem(state.items, action.payload)
        }
      case 'add':
        return {
          ...state,
          items: [...state.items, {text: action.payload, id: state.lastId+1}],
          lastId : state.lastId + 1
        }
      default:
          return state;
  }
}
function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Input dispatch={dispatch} lastId={state.lastId}/>
      <List dispatch={dispatch} items={state.items}/>
    </>
  )
}

export default App
