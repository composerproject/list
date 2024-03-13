import ListItem from "./ListItem"


function List({dispatch, items}) {
  return (
    <ul>
        {items.map((item, i) => <ListItem dispatch={dispatch} text={item.text} key={i} id={i} />)}
    </ul>
  )
}

export default List