import { useReducer, useState, useEffect } from 'react';
import './App.css';
import { add, subtract, addByValue, reset } from './redux/slice/counter';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './redux/slice/fetchProducts';
import LoadingComponent from './components/loadingSpinner';
//https://dummyjson.com/products

function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true)
  const currentStateOfCouterStore = useSelector(state => state.counter);
  const { data: products, status } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  console.log(products.products)
  console.log(status)
  const addition = () => {
    dispatch(add())
  }
  const subtraction = () => {
    dispatch(subtract())
  }
  const resetFn = () => {
    dispatch(reset())
  }
  const additionByValue = (payload) => {
    console.log(payload)
    dispatch(addByValue(payload))
  }
  console.log(input)

  if (status == "pending") {
    return <LoadingComponent />
  }

  if(status == "error"){
    return <h5>error in fetching data</h5>
  }

  return (

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", flexDirection: "column", gap: ".5rem" }}>
      
      {
        products.products?.map((product, i) => (
          <ItemCard title={product.title} description={product.description} price={product.price} thumbnail={product.thumbnail} />
        ))
      }
      {/* <div>
        <input type="text"  onChange={(e) => setInput(Number(e.target.value))}/>
        <h2>{currentStateOfCouterStore}</h2>
      </div>


      <div style={{ display: "flex", gap: ".5rem" }}>
        <button onClick={() => dispatch(add())}>add</button>
        <button onClick={subtraction}>subtract</button>
        <button onClick={resetFn}>reset</button>
        <button onClick={() => additionByValue(input)}>add by value</button>
      </div> */}
    </div>

  )
}

export default App




function ItemCard({ title, description, price, thumbnail }) {
  return (
    <>
      <div style={{ height: "65%", width: "45%", display: "flex", flexDirection: "column", border: "1px solid #333" }}>
        <div style={{ width: "100%", height: "70%" }}>
          <img src={thumbnail} alt="" style={{ width: "100%", height: "auto", overflow: "hidden" }} />
        </div>

        <div style={{ width: "100%", height: "30%", display: "flex", flexDirection: "column" }}>
          <p>{title}</p>
          <p>{description}</p>
          <p>{price}</p>
          <button>add to cart</button>
        </div>
      </div>
    </>
  )
}






