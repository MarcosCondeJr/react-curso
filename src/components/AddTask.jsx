import { useState } from "react"

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    console.log(title, description)

    return (
        <div className="space-y-4 p-6 bg-blue-200 rounded-md shadow flex flex-col">
            <input 
                className="border border-blue-300 rounded-md outline-slate-400 px-4 py-2" 
                type="text" 
                placeholder="Digite o titulo da tarefa" 
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
            />
            <input 
                className="border border-blue-300 rounded-md outline-slate-400 px-4 py-2" 
                type="text" 
                placeholder="Digite o titulo da tarefa" 
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value)
                }}
            />
            <button 
                onClick={() => onAddTaskSubmit(title, description)} 
                className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium">
                    Adicionar
            </button>
        </div>
    )
}

export default AddTask