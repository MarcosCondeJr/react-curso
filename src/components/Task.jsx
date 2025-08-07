import { ChevronRightIcon } from "lucide-react";
import { Trash } from "lucide-react";
import { Check } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => 
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => onTaskClick(task.id)} 
                        className={`bg-slate-400 flex gap-1 text-left w-full text-white p-2 rounded-md ${
                            task.isCompleted && 'line-through'
                        }`}
                    >
                            {task.isCompleted && <Check />}
                            {task.title}
                    </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>
                    <button 
                        onClick={() => onDeleteTask(task.id)} 
                        className="bg-slate-400 rounded-md p-2 text-white"
                    >
                        <Trash />
                    </button>
                </li>
            )}
        </ul>
    );
}

export default Tasks;