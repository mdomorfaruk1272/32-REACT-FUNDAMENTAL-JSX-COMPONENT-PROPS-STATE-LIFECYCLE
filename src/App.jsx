import './App.css'
import { useState } from "react";

/**
 * we can pass object and array in props
 */

function App() {
  return (
      <div>
          <Counter></Counter>
      </div>
  )
}

/**
 * we can add event handler like html online event handling. with event handler name camelCase. and this attribute
 * will dynamic
 * @returns {JSX.Element}
 * @constructor
 */

function Counter(){
    const [count, setState] = useState(0);
    const handleIncrease = () => {
        const newCount = count + 1;
        setState(newCount);
    }
    console.log(count);
    const handleDecrease = () => {
        const newCount = count - 1;
        setState(newCount);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onMouseMove={()=>setState(count -1)}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}
export default App
