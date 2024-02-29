import { useReducer } from 'react';
import './App.css'

const reducer = (state, action) => {
   switch(action.type){
     case 'INCREMENT':
      return {...state, result: state.result + 1}
    case 'DECREMENT':
      return {...state, result: state.result - 1}
    case 'INCREMENT_BY_VALUE':
      return {...state, result: Number(state.value) + Number(state.result)}
    case 'VALUE_INPUT':
      return {...state, value: action.payload}
    case 'RESET':
      return {...state, result: 0, value: ""}
    default:
      throw new Error('invalid input or action')
   }
};


function App() {
  const [state, dispatch] = useReducer(reducer, {value:"", result:0})
  
  return (



    <div style={{height:"100vh", width:"auto", padding:".5rem", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#f2f3f4"}}>
      
     <div style={{height:"50%", width:"50%", backgroundColor:"#fff", display:"flex", flexDirection: "column", padding:".5rem", gap:"1rem", justifyContent:"center", alignItems:"center"}}>

       <input value={state.value} onChange={(e) => dispatch({type:'VALUE_INPUT', payload: e.target.value})} type='number' placeholder='Enter a Number'/>
       <button onClick={() => dispatch({type: 'INCREMENT'})} className='btn'>+</button>
       <button onClick={() => dispatch({type: 'DECREMENT'})} className='btn'>-</button>
       <button onClick={() => dispatch({type:'RESET'})} className='btn'>reset</button>
       <button onClick={() => dispatch({type: 'INCREMENT_BY_VALUE'})} className='btn'>Add By Value</button>
       <h3>{state.result}</h3>
     </div>
      
    
    </div>
   
     
  )
}

export default App
