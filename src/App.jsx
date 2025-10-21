import './App.css'

/**
 * pass dyanmic data in component by kay and value;
 */

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman"];
  return (
    <div>
    <p>I am a React Person</p>
    <Person name="Munna" job="football"></Person>
    <Person name="Masum" job="Dorshok"></Person>
    <Person></Person>
    </div>
  )
}

/**
 * props used to get dynamic data in Component. It is a object. key is the component attribute 
 * and value is the component attribute value.
 * @param {*} props 
 * @returns 
 */

function Person(props){
  return(
    <div style={{border: '2px solid gold', width:'400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App
