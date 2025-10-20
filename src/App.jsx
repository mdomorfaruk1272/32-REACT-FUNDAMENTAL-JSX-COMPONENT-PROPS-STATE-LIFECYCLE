import './App.css'

/**
 * second bracket({}) is used to use variable on jsx html / used to make content dynamic or display dynamic data. Like: <p>{name}</p>
 * For inline style in react jsx we use an object of style with (key, value). Like: const style={color:"red"}
 * In component style attribute is dynamic for that we need to use second bracket after equal sign. Like: <p style={style}></p> 
 * @returns 
 */

function App() {
  var name = "Md. Omor Faruk";
  var person = {
    name: 'Dr. Mahfuz',
    job: 'Singer',
  }

  var person2 = {
    name: "Eva Rahman",
    job: "kokil kondi",
  }

  var style = {
    color: 'red',
    backgroundColor: 'yellow',
  }

  return (
    <div style={{backgroundColor:'green'}}>
    <h1>i am a react person {name}</h1>
    </div>
  )
}

export default App
