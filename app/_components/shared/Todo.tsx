import { todoType } from '@/app/_types/types';
import DeleteTodo from './DeleteTodo';
import Status from './Status';

const Todo = async ({ todo, query }: { todo: todoType; query?: string }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? 'line-through' : 'none',
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      className="w-1/3 flex items-center justify-between bg-white py-3 px-20 rounded-2xl ml-25"
      style={todoStyle}
    >
      <Status todo={todo} />
      <span className="text-center font-bold">{todo.title}</span>
      <div className="flex items-center gap-5">
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
