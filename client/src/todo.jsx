import React from 'react'

function Todo({childStyle3, childStyle4, childStyle5, handleDelete, tasks}) {
  return (
    <div className="tasks"
        style={childStyle4}
      >
        {
          tasks.map(todo => (
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