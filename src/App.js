import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [tasks, setTasks]=useState([
      {
        id: 1,
        text: "Doctor Appointment",
        day: "Feb 5th at 2.30pm",
        reminder: true,
      },
    
      {
        id: 2,
        text: "Meeting at 6pm",
        day: "Feb 6th at 1.30pm",
        reminder: true,
      },
    
      {
        id: 3,
        text: "Food Shopping ",
        day: "Feb 5th at 11.30pm",
        reminder: true,
      },
    ])

  return (
    <div className="Container">
      <Header />
      <Tasks tasks={tasks} />

    
     </div>
   )
   }

 export default App;