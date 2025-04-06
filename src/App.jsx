import { Child } from "./Child";
import { useLazyGetTodosQuery } from "./store";

function App() {
  const [getTodos, { data, error, isLoading, }] = useLazyGetTodosQuery();
  console.log(data);

  return (
    <>
      <button
        onClick={() => {
          getTodos();
        }}
      >
        Get Todos
      </button>
      {/* <h1>Loading...</h1> */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data?.map((todo) => <div>{todo.title}</div>)
      )}
      {/* <Child /> */}
    </>
  );
}

export default App;
