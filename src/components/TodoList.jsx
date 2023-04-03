import { TodoItem } from './TodoItem';
import { useToDos } from '../contexts/useToDos';

export const TodoList = props => {
  const { completedToDos, pendingToDos } = useToDos();

  return (
    <section className="col p-2 m-2 border rounded-1">
      <h4>{props.name}</h4>
      <ul className="list-group list-group-flush">
        {props.name === 'Finalizados'
          ? completedToDos.map(todo => <TodoItem todo={todo} />)
          : pendingToDos.map(todo => <TodoItem todo={todo} />)}
      </ul>
    </section>
  );
};
