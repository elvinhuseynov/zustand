import { Child } from "./Child";
import { useStore } from "./store";

function App() {
  const { inc, dec } = useStore();

  return (
    <>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <Child />
    </>
  );
}

export default App;
