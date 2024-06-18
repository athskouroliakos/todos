import Form from '../ui/Form';
import Button from '../ui/Button';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { todoType } from '@/app/_types/types';
import { todoStatus } from '@/app/_lib/actions/actions';

const Status = ({ todo }: { todo: todoType }) => {
  return (
    <div className="text-3xl">
      <Form action={todoStatus}>
        <input
          name="inputId"
          value={todo.id}
          className="border-gray-700 border"
          type="hidden"
        />

        <Button text={<MdOutlineCheckBoxOutlineBlank />} />
      </Form>
    </div>
  );
};

export default Status;
