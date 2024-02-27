import React, {useEffect, useState} from 'react'

function Todo({childStyle3, childStyle4, childStyle5, handleDelete, tasks, localStorageState}) {
  const [state, setState] = useState(null)

  useEffect(() => {
    const getLocalStorage = () => {
      setState(JSON.parse(localStorage.getItem('todo')))
    }
    getLocalStorage()
  }, [])

  console.log(state)
  return (
    <div className="tasks"
        style={childStyle4}
      >
        {
          state?.map(todo => (
            <div className='holder'>
            <div className="todo" style={childStyle5}
            key={todo.id}
            >
              {todo.value}
            </div>
            <button key={todo.value} style={childStyle3}
            onClick={() => handleDelete(todo)}
            >Delete</button>
            </div>
          ))
          
        }

      </div>  
  )
}

export default Todo; //childStyle4, tasks,childStyle5, childStyle3, handleDelete