import axios from "axios";
const baseURL = "http://localhost:4000";

export const taskService = {
  getAll: async () => {
    try {
      const response = await axios.get(`${baseURL}/tasks`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter as tasks:", error);
      throw error;
    }
  },

  getById: async (id: string) => {
    try {
      const response = await axios.get(`${baseURL}/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter a task:", error);
      throw error;
    }
  },

  create: async (task: { title: string; description: string }) => {
    try {
      const response = await axios.post(`${baseURL}/tasks`, task);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar a task:", error);
      throw error;
    }
  },

  update: async (
    id: string,
    updatedTask: { title?: string; description?: string }
  ) => {
    try {
      const response = await axios.put(`${baseURL}/tasks/${id}`, updatedTask);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar a task:", error);
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      await axios.delete(`${baseURL}/tasks/${id}`);
    } catch (error) {
      console.error("Erro ao excluir a task:", error);
      throw error;
    }
  },
};
