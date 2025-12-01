import React, { use, useState } from "react";

const InteractiveList = () => {
  const [listItem, setlistItem] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setlistItem(event.target.value);
  }

  function handleClick() {
    setItems([...items, listItem]);
  }
  function handleDelete() {
    setlistItem("");
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {items.map((item) => (
          <div>
            <li>
              {item}
              <button onClick={handleDelete}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default InteractiveList;
