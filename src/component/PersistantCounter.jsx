
import React, { useEffect, useState } from 'react';

const PersistantCounter = () => {
  const [count, setCount] = useState(()=>{
    const savedCount=localStorage.getItem("mycounter");
  return savedCount?Number(savedCount):0;
  });
  useEffect(()=>
  {
    localStorage.setItem("mycounter",count);
    console.log("count is getting store in local storage",count);    //to make storage permenent
    
  },[count]);

  return (
    <div
      style={{
        padding: '30px',
        textAlign: 'center',
        background: '#1a1a2e',
        borderRadius: '10px',
        margin: '20px auto',
        maxWidth: '400px',
        color: 'white'
      }}
    >
      <h2  style={{ color: 'white' }}>Counter</h2>

      <p
        style={{
          fontSize: '4rem',
          margin: '20px 0',
          color: '#00d4ff'
        }}
      >
        {count}
      </p>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center'
        }}
      >
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default PersistantCounter;