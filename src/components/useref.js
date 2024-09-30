import React, { useRef, useState } from 'react';

function Clicker() {

  const countRef = useRef(0);
  const [count, setCount] = useState(countRef.current);


  const incrementCount = () => {

    countRef.current += 1;
    
    console.log("current is "+countRef.current)
    setCount(countRef.current);
  };

  return (
    <div>
      <h1>Clicker</h1>
      <h1 className="bg-dark text-white p-5 text-center">Current Count: {count}</h1>
      <button className="btn w-23  btn-primary ms-3 p-2" onClick={incrementCount}>Increment</button>
    </div>
  );


}

export default Clicker;
