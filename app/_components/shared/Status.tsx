import Form from '../ui/Form';
import Button from '../ui/Button';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { todoType } from '@/app/_types/types';
import { todoStatus } from '@/app/_lib/actions/actions';


const Status = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button text={<AiOutlineCheckCircle />} />
    </Form>
  );
};

export default Status;
