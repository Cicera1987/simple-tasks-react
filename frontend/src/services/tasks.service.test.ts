import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Mocked } from "vitest";
import axios from "axios";
import { taskService } from "./tasks.service";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("taskService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve buscar todas as tasks", async () => {
    const fakeTasks = [
      { id: "1", title: "Tarefa 1", description: "Desc 1" },
      { id: "2", title: "Tarefa 2", description: "Desc 2" },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: fakeTasks });

    const result = await taskService.getAll();

    expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:4000/tasks");
    expect(result).toEqual(fakeTasks);
  });

  it("deve buscar uma task por ID", async () => {
    const fakeTask = { id: "1", title: "Tarefa", description: "Teste" };
    mockedAxios.get.mockResolvedValueOnce({ data: fakeTask });

    const result = await taskService.getById("1");

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "http://localhost:4000/tasks/1"
    );
    expect(result).toEqual(fakeTask);
  });

  it("deve criar uma nova task", async () => {
    const newTask = { title: "Nova", description: "Criada" };
    const createdTask = { id: "99", ...newTask };
    mockedAxios.post.mockResolvedValueOnce({ data: createdTask });

    const result = await taskService.create(newTask);

    expect(mockedAxios.post).toHaveBeenCalledWith(
      "http://localhost:4000/tasks",
      newTask
    );
    expect(result).toEqual(createdTask);
  });

  it("deve atualizar uma task", async () => {
    const updated = { id: "1", title: "Atualizada" };
    mockedAxios.put.mockResolvedValueOnce({ data: updated });

    const result = await taskService.update("1", { title: "Atualizada" });

    expect(mockedAxios.put).toHaveBeenCalledWith(
      "http://localhost:4000/tasks/1",
      {
        title: "Atualizada",
      }
    );
    expect(result).toEqual(updated);
  });

  it("deve remover uma task", async () => {
    mockedAxios.delete.mockResolvedValueOnce({});

    await taskService.remove("1");

    expect(mockedAxios.delete).toHaveBeenCalledWith(
      "http://localhost:4000/tasks/1"
    );
  });
});
