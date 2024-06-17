import { Suspense } from 'react';
import Todo from '../_components/shared/Todo';
import { getAllTodos, getStatus } from '../_lib/actions/todoActions';

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const data = await getStatus(true, query);

  return (
    <div className=" flex flex-col items-center justify-center  w-full mt-10">
      {data?.map((todo, id) => (
        <div className="w-screen py-3 flex items-center flex-col" key={id}>
          <Suspense>
            <Todo todo={todo} query={query} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default page;
