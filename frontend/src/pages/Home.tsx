import { TaskForm } from "../components/form/taskForm";
import { TaskList } from "../components/list/taskList";
import { useTasksContext } from "../Context/TasksProvider";
import type { TaskFormValues } from "../types/types";

export default function Home() {
  const { addTask } = useTasksContext();

  const handleAddTask = (data: TaskFormValues) => {
    addTask(data);
  };

  return (
    <div className="bg-zupGrayLight flex flex-col md:flex-row gap-6 p-6 h-screen md:h-screen">
      <div className="flex-1 bg-zupBordoLight p-6 rounded-lg shadow-md flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-white">Adicionar</h2>
        <TaskForm onSubmit={handleAddTask} />
      </div>
      <div className="flex-1 bg-zupBordoLight p-6 rounded-lg shadow-md flex flex-col md:h-full">
        <h2 className="text-2xl font-bold mb-4 text-white">Suas Atividades</h2>
        <div className="flex-1 md:overflow-y-auto scrollbar-hide pr-2">
          <TaskList />
        </div>
      </div>
    </div>
  );
}
