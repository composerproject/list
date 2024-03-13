import { useReducer } from 'react'
import './App.css'
import Input from './components/Input'
import List from './components/List'

const initialState = {
  items : [
    {
      text:"ceci est mon texte"
    },
    {
      text:"ceci est mon autre texte"
    },
    {
      text:"tellement de talent !"
    }
  ]
}

const removeItem = (arr, id) => {
  return [...arr.slice(0,id), ...arr.slice(id+1)];
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
          items: [...state.items, {text: action.payload}]
        }
      default:
          return state;
  }
}
function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Input dispatch={dispatch} />
      <List dispatch={dispatch} items={state.items}/>
    </>
  )
}

export default App
