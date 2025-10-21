import './App.css'
import { useEffect, useState } from "react";

/**
 * we can pass object and array in props
 */

function App() {
  return (
      <div>
          <Counter></Counter>
          <Users></Users>
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

/**
 * useEffect() -> is used to load data / anything outside of application or load data /  anything from server
 * 1st param is the callback function. under this function we need to load data / anything from server
 * 2nd param is the empty array to say useEffect that he will call on first time component load.
 * Other ways he call every time of component loading.
 * Component will rerender when the setState call / state will change
 * @returns {JSX.Element}
 * @constructor
 */

function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h3>Dynamic Users: {users.length}</h3>
            <ul>
                {
                    users.map(user => <li>{user.name}</li>)

                }
            </ul>
        </div>
    )
}

export default App
