import React from 'react'
import List from "./List";

const Columns = ({column, tasksList}) => {
  return (
    <div className='column'>
      <p className='column-header'>
        {column}
      </p>
      <div>
        {tasksList?.length > 0 && tasksList.map(task => <List key={task.id} task={task}/>)}
      </div>
    </div>
  )
}

export default Columns
