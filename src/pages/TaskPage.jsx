import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return (
        <div className="h-screen w-screen bg-blue-500 p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-blue-100 font-bold text-center">Detalhes da Tarefa</h1>
                
                <div className="bg-blue-200 p-4 rounded-md">
                    <h2 className="text-xl text-blue-600 font-bold">{title}</h2>
                    <p className="text-blue-600">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskPage