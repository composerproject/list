import { useState } from "react"


function Input({dispatch}) {
    const [content, setContent] = useState("");



    const handleClick = () => {
        dispatch({
            type: 'add',
            payload: content
        })
    }

    const handleChange = (e) => {
        setContent(e.target.value);
    }

  return (
    <div>
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Input