
import { useState } from 'react';
import './App.css'
import Columns from './components/Columns';
import {initialData} from "./utils/Tasks";

function App() {
  const [tasksData, setTasksData] = useState(initialData);
  function getTasksList(colKey) {
    const tasksIds = initialData.colums[colKey].tasksIds;
    const tasksListData = [];

    for(let i = 0; i < tasksIds.length; i++) {
      tasksListData.push(initialData?.tasks[tasksIds[i]]);
    }

    tasksListData.sort((a,b) => a.order - b.order); //sort on the bases of order
    return tasksListData;
  }
  return (
    <main className='app-container'>
      <section className='colums-container'>
          <div className='tasks-columns'>
            {
              tasksData?.columsOrder && tasksData?.columsOrder?.map((col, index) => <Columns column={col} key={index} tasksList={getTasksList(col)}></Columns>)
            }
          </div> 
      </section>
     
    </main>
  )
}

export default App
