import './App.css'

/**
 * The first character of Component function must be uppercase. function Person(){return <h3>hello</h3>}
 * we need to use Component as like html tag. <Person></Person>
 * we can return multiple html element under a parent element in jsx.
 */

function App() {
  return (
    <div>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    </div>
  )
}

function Person(){
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
  }
  return (
    <div style={{border: '2px solid yellow', margin: '10px'}}>
      <h1>Name: Sakib Al Hasan</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App
