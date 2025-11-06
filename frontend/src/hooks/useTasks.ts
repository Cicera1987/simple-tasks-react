import { useEffect, useState } from "react";
import { taskService } from "../services/tasks.service";
import type { Task } from "../types/types";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await taskService.getAll();
      setTasks(data);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar tasks.");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (newTask: Omit<Task, "id">) => {
    try {
      const created = await taskService.create(newTask);
      setTasks((prev) => [...prev, created]);
    } catch (err) {
      console.error(err);
      setError("Erro ao criar task.");
    }
  };

  const updateTask = async (id: string, updatedData: Partial<Task>) => {
    try {
      const updated = await taskService.update(id, updatedData);
      setTasks((prev) => prev.map((task) => (task.id === id ? updated : task)));
    } catch (err) {
      console.error(err);
      setError("Erro ao atualizar task.");
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskService.remove(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      console.error(err);
      setError("Erro ao excluir task.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    refetch: fetchTasks,
  };
}
