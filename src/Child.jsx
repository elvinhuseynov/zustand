import { useStore } from "./store";

export const Child = () => {
  const { count } = useStore();
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {count}
    </div>
  );
};
