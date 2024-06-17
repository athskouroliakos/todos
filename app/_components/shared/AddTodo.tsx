import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { createTodo } from '@/app/_lib/actions/todoActions';

const AddTodo = () => {
  return (
    <Form action={createTodo} className="w-1/2 m-auto">
      <div className="flex">
        <Input name="input" type="text" placeholder="I want to do..." />
        <Button type="submit" text="Add" />
      </div>
    </Form>
  );
};

export default AddTodo;
