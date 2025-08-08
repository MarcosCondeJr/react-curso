import Tasks from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid"

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

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-blue-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask}/>
      </div>
      <button onClick={() => {}}></button>
    </div>
  );
}

export default App;