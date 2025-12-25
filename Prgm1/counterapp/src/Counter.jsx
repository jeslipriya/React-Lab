import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen m-0 bg-gradient-to-br from-cyan-400 to-gray-50 text-blue-600 text-[30px] text-center">
      
      <h1 className="font-extrabold pt-[30vh] font-serif">
        COUNTER-APP
      </h1>

      <p className="font-sans text-[80px] my-6">
        {count}
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 border-[5px] border-black rounded-[15px] cursor-pointer
                     transition-all duration-400 ease-in-out
                     hover:bg-blue-600 hover:text-cyan-400"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 border-[5px] border-black rounded-[15px] cursor-pointer
                     transition-all duration-400 ease-in-out
                     hover:bg-blue-600 hover:text-cyan-400"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 border-[5px] border-black rounded-[15px] cursor-pointer
                     transition-all duration-400 ease-in-out
                     hover:bg-blue-600 hover:text-cyan-400"
        >
          Reset
        </button>
      </div>

    </div>
  );
}

export default Counter;
