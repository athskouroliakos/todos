import Todo from './_components/shared/Todo';
import { getAllTodos } from './_lib/actions/actions';

const Home = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const data = await getAllTodos(query);

  return (
    <div className=" flex flex-col items-center justify-center  w-full mt-10">
      {data?.map((todo, id) => (
        <div className="w-screen py-3 flex items-center flex-col" key={id}>
          <Todo todo={todo} query={query} />
        </div>
      ))}
    </div>
  );
};

export default Home;
