import React, { useState } from "react";
import { useRef } from "react";
const Contact = () => {
  const name = useRef(null);
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData([...data, name.current.value]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
          ref={name}
        />
        <button>submit</button>
      </form>
      {data.map((x, i) => {
        return <div key={i}>{x}</div>;
      })}
    </div>
  );
};

export default Contact;
