import { useState } from "react";

const LearnHooks = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{`Counter : ${counter}`}</h1>
      <div>
        <button onClick={() => setCounter((counter) => counter++)}>
          Increment
        </button>
        <button onClick={() => setCounter((counter) => counter--)}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default LearnHooks;
