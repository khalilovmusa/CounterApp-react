import { useState } from "react";
import "./Counter.css"
const Counter = () => {
    const [count, setCount] = useState(0);
    let [color, setColor] = useState("#ffffff");


    const randomColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for(let i = 0; i<6; i++){
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        setColor(hexColor);
        console.log(hexColor)
    }

    const handleAdd = () => {
        count < 10 ? setCount(count + 1) : console.log("err");
    }

    const handleSub = () => {
        count > -10 ? setCount(count - 1) : console.log("err")
    }
    return (
        <div className="div-color" style={{backgroundColor:color}}>
            <button onClick={() => { handleSub() , randomColor()}}>-</button>
            {count}
            <button onClick={() => { handleAdd() , randomColor()}}>+</button>
        </div>
    )
}

export default Counter;