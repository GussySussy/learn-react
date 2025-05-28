import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const LearnHooks = () => {
  const [counter, setCounter] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleGetSearchParams = () => {
    console.log(searchParams);
  };

  const handleSetSearchParams = () => {
    searchParams.set("hello", "jupiter");
    setSearchParams(searchParams)
  };

  return (
    <>
      <h1>{`Counter : ${counter}`}</h1>
      <div>
        <button onClick={handleGetSearchParams}>Get Search Params</button>
        <button onClick={handleSetSearchParams}>Set Search Params</button>
      </div>
    </>
  );
};

export default LearnHooks;
