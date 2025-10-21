import './App.css'

/**
 * we can pass object array in props
 */

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman"];
  const products = [
    {name: 'photoshop', price: '$90.99'},
    {name: 'illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]

  return (
    <div>
    <p>I am a React Person</p>
    <Product product={products[0]}></Product>
    <Product product={products[1]}></Product>
    <Person name="Munna" job="football"></Person>
    <Person name="Masum" job="Dorshok"></Person>
    <Person></Person>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    display: 'block',
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
    <h3>{props.product.name}</h3>
    <h1>{props.product.price}</h1>
    <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border: '2px solid gold', width:'400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App
