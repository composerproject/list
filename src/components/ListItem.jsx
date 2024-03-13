

function ListItem({dispatch, text, id}) {
    function handleClick(id){
        console.log("id : " + id);
        dispatch({
            type: 'remove',
            payload: id
        })    
    }

  return (
    <li>
        <div className="flex">
            <p>
                {text}
            </p>
            <button onClick={() => handleClick(id)} >X</button>
        </div>
    </li>
  )
}

export default ListItem