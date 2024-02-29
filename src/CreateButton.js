import { useState } from "react";
import Button from './Button.css';

function CreateButton() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("blue");
  function handleClick() {
    setCount(count + 1);
    setColor("white");
  }

  return (
    <button onClick={handleClick} style={{ color: color }}>
      Купить {count}
    </button>
  );
}

export default CreateButton;
