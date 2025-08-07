import { useState } from "react"

function AddTask({onAddTaskSubmit}) {
    const [title, setTitile] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input 
                className="border border-slate-300 rounded-md outline-slate-400 px-4 py-2" 
                type="text" 
                placeholder="Digite o titulo da tarefa" 
            />
            <input 
                className="border border-slate-300 rounded-md outline-slate-400 px-4 py-2" 
                type="text" 
                placeholder="Digite o titulo da tarefa" 
            />
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    )
}

export default AddTask