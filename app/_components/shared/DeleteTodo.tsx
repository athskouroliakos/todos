import Button from '../ui/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import Form from '../ui/Form';
import { deleteTodo } from '@/app/_lib/actions/todoActions';
import { todoType } from '@/app/_types/types';

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={todo.id} />
      <Button text={<BsFillTrashFill />} />
    </Form>
  );
};

export default DeleteTodo;
