import { TasksProvider } from "./Context/TasksProvider";
import RoutePages from "./routes/route";

function App() {
  return (
    <div className=" bg-zupBordo text-zupGrayLight flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Criar Atividades Diárias</h1>
      <TasksProvider>
        <RoutePages />
      </TasksProvider>
    </div>
  );
}

export default App;
