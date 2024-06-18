import Button from '../ui/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import Form from '../ui/Form';
import { todoType } from '@/app/_types/types';
import { deleteTodo } from '@/app/_lib/actions/actions';
import Input from '../ui/Input';

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button text={<BsFillTrashFill />} />
    </Form>
  );
};

export default DeleteTodo;
