import React, { useState, useEffect } from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
 
  const initialSize = 100;
  const minSize = 50;
  const maxSize = 200;


  const [size, setSize] = useState(initialSize);
  const [isGrowing, setIsGrowing] = useState(true);


  useEffect(() => {
   
    if (isGrowing && size < maxSize) {
      const interval = setInterval(() => {
        setSize(prevSize => Math.min(prevSize + 5, maxSize)); 
      }, 30); 

      return () => clearInterval(interval); 
    }

    if (!isGrowing && size > minSize) {
      const interval = setInterval(() => {
        setSize(prevSize => Math.max(prevSize - 5, minSize)); 
      }, 30); 

      return () => clearInterval(interval); 
    }
  }, [isGrowing, size]); 

 
  const handleClick = () => {
    setIsGrowing(!isGrowing); 
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: "16px",
        borderRadius: "8px",
        border: "2px solid #ff4f92",
        backgroundColor: "#ff4f92",
        color: "#fff",
        cursor: "pointer",
        transition: "width 0.3s, height 0.3s", 
      }}
    >
      {isGrowing ? "Küçült" : "Büyüt"}
    </button>
  );
};

export default App;
