import { useState } from "react";
import { TaskForm } from "../form/taskForm";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useTasksContext } from "../../Context/TasksProvider";
import type {Task, TaskFormValues } from "../../types/types";


export const TaskList = () => {
  const { tasks, deleteTask, updateTask } = useTasksContext();
  const [editId, setEditId] = useState<string | null>(null);

const startEdit = (task: Task) => {
  setEditId(task.id);
};

const saveEdit = (data: TaskFormValues) => {
  if (editId !== null) {
    updateTask(editId, data);
    setEditId(null);
  }
};

  return (
    <div className="space-y-4">
      {tasks.length === 0 && (
        <p className="text-white/90 text-center py-8">
          Nenhuma task cadastrada ainda.
        </p>
      )}

      {tasks.map((task) => (
        <Card
          key={task.id}
          className="p-4 bg-white rounded-lg shadow-sm flex flex-col gap-3"
        >
          {editId === task.id ? (
            <TaskForm
              defaultValues={task}
              onSubmit={saveEdit}
              onCancel={() => setEditId(null)}
            />
          ) : (
            <div className="flex flex-col sm:flex-coljustify-between items-start  gap-3">
              <div>
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <p className="text-gray-700">{task.description}</p>
              </div>
              <div className="flex gap-2 self-end sm:self-auto">
                <Button onClick={() => startEdit(task)}>Editar</Button>
                <Button
                  onClick={() => deleteTask(task.id)}
                >
                  Deletar
                </Button>
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};
