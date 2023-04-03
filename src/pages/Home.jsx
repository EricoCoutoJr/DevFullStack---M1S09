import { ToDoProvider } from '../contexts/ToDoProvider';
import { TodoList } from '../components/TodoList';
import { Formulario } from '../components/Formulario';

export const Home = () => {
  return (
    <ToDoProvider>
      <div className="row">
        <Formulario />
      </div>
      <div className="row">
        <TodoList name="A fazer" />
        <TodoList name="Finalizados" />
      </div>
    </ToDoProvider>
  );
};
