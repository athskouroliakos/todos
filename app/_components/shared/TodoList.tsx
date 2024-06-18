import { getStatus } from '@/app/_lib/actions/actions';
import Todo from './Todo';

const Page = async ({
  searchParams,
  isCompleted,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
  isCompleted: boolean;
}) => {
  const query = searchParams?.query || '';
  const data = await getStatus(isCompleted, query);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      {data?.map((todo, id) => (
        <div className="w-screen py-3 flex items-center flex-col" key={id}>
          <Todo todo={todo} query={query} />
        </div>
      ))}
    </div>
  );
};

export default Page;
