import Item from "./item";

function ItemList(props) {
  const { list, onItemDelete, onTickComplete } = props;
  return (
    <ul className="list-group">
      {list.map((item) => (
        //pass thru
        <Item
          key={item.id}
          {...item}
          onItemDelete={(id) => {
            onItemDelete(id);
          }}
          onTickComplete={(id) => {
            onTickComplete(id);
          }}
        />
      ))}
    </ul>
  );
}

export default ItemList;