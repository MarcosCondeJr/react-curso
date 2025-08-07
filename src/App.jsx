import Tasks from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Programação",
      description: 
        "Estudar Programação",
        isCompleted: false
    },
    {
      id: 2,
      title: "Programação",
      description: 
        "Estudar Programação",
        isCompleted: false
    },
    {
      id: 3,
      title: "Programação",
      description: 
        "Estudar Programação",
        isCompleted: false
    }
  ])

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    })

    setTasks(newTask)
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask}/>
        {/* <AddTask /> */}
      </div>
      <button onClick={() => {}}></button>
    </div>
  );
}

export default App;