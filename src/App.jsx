import './App.css'

/**
 * we can pass object array in props
 */

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman", "Bappi"];
  const products = [
    {name: 'photoshop', price: '$90.99'},
    {name: 'illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere El', price: '$249.99'}
  ]
  const friends = [
    {name: 'Md. Hasan Ali', age: 17},
    {name: 'Md. Kalam Ali', age: 18},
    {name: 'Md. Salam Ali', age: 19},
    {name: 'Md. Jaman Ali', age: 20},
    {name: 'Md. Hamim Ali', age: 21},
    {name: 'Md. Rakib Ali', age: 22},
  ]
  const friendsHtml = [];
  for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    friendsHtml.push(<Friend friend={element}></Friend>)
  }
  console.log(friendsHtml);
  // const productsName = products.map(product => product.name);
  // console.log(productsName);
  const nayoksName = nayoks.map(nayok => nayok);
  console.log(nayoksName);
  return (
    <div>
    <p>I am a React Person</p>
    <ul>
      {
        nayoks.map(nayoks => <li>{nayoks}</li>)
      }
      {
        products.map(product => <li>{product.name}</li>)
      }
    </ul>
    {
      products.map(product => <Product product={product}></Product>)
    }
    <Person></Person>
    {
      friends.map(friend => <Friend friend={friend}></Friend>)
    }
    {/* {
     friendsHtml
    } */}
    </div>
  )
}

function Friend(props){
  return (
    <div style={{backgroundColor:'lightsalmon', borderRadius:'10px', margin: '10px', padding: '15px', boxShadow: '5px 5px 10px gray'}}>
      <h1>Name: {props.friend.name}</h1>
      <h3>Age: {props.friend.age}</h3>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '300px',
    float: 'left',
    display: 'block',
  }
  const {name, price} = props.product;
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
