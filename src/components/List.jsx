import ListItem from "./ListItem"


function List({dispatch, items}) {
  return (
    <ul>
        {items.map((item) => console.log("text : " + item.text + " _ id : " + item.id))};
        {items.map((item, i) => <ListItem dispatch={dispatch} text={item.text} key={i} id={item.id} />)}
    </ul>
  )
}

export default List