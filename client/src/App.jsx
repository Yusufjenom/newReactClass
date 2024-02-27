import { useState } from 'react'
import './App.css'
import { childStyle, childStyle2, childStyle3, childStyle4, childStyle5, parentContainer } from './style';
import Todo from './todo';

function App() {
  const [task, setTask] = useState({
    id: 0,
    value: ""
  });
  const [tasks, setTasks] = useState([]);
  const [localStorageState, setLocalStorageState] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState(['red', 'blue', 'yellow', 'crimson', 'green']);
  const [color, setColor] = useState('')
 
  const handleOnchangeEvent = tega => {
    const objValue = {
      id: tasks.length < 1 ? 0 : tasks[tasks.length - 1].id + 1,
      value: tega.target.value
    }
    setTask(objValue);
    // setTask(" ")
  }

  const handleSubmit = () => {
    setTasks([...tasks, task]);
    localStorage.setItem('todo', JSON.stringify(tasks))
    if(tasks){
      setLocalStorageState(JSON.parse(localStorage.getItem('todo')))
    };
    
  };
  
  const handleDelete = (item) => {
    const newTasks = tasks.filter(val => val.id !== item.id) //[make tea, clean the room]
    setTasks(newTasks)
  };

  const shuffleColors = () => {
    const pick = Math.floor(Math.random() * 4)
    
    setColor(colors[pick])
    
  }


  const handleDisplay = () => {
    setIsOpen(!isOpen)
    shuffleColors()
  };

 
  //console.log(task);
  console.log(JSON.parse(localStorage.getItem('todo')))
  return (
    <div style={parentContainer} >
      {
        isOpen ? <h3 style={{color: color}}>Omolara Understands useState</h3> : <h3></h3>
      }
      <button onClick={handleDisplay}>Hide</button>
      <div className="task" style={childStyle} >
        <input type="text"
          style={childStyle2}
          onChange={(e) => handleOnchangeEvent(e)}
          value={task.value}
        />
        <button style={childStyle3}
          onClick={handleSubmit}
        >Add Todo
        </button>

      </div>

      <Todo
        childStyle4={childStyle4}
        tasks={tasks}
        childStyle5={childStyle5}
        childStyle3={childStyle3}
        handleDelete={handleDelete}
        localStorageState={localStorageState}
      />

    </div>
  )
}

export default App
