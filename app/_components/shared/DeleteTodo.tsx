import Button from '../ui/Button';
import { TiDeleteOutline } from 'react-icons/ti';
import Form from '../ui/Form';
import { todoType } from '@/app/_types/types';
import { deleteTodo } from '@/app/_lib/actions/actions';
import Input from '../ui/Input';

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <div className="text-3xl">
      <Form action={deleteTodo}>
        <Input type="hidden" name="inputId" value={todo.id} />
        <Button text={<TiDeleteOutline />} />
      </Form>
    </div>
  );
};

export default DeleteTodo;
