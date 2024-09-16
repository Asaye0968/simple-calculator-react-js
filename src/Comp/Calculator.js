import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setInput(prevInput => prevInput + value);
  };

  // Handle clear button
  const handleClear = () => {
    setInput("");
  };
//handle delete
const handleDelete = () => {
    if (input.length > 0) {
      setInput(prevInput => prevInput.slice(0, -1));
    }
  };
  // Handle calculation
  const handleCalculate = () => {
    try {
      setInput(eval(input)); // Simple evaluation, be cautious with eval
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <>
    <h1 style={{color:'pink',textAlign:'center'}}>Simple calculator</h1>

    <div className="calculator">
      <div className="display">
        {input || "0"}
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("(")}>(</button>
      <button onClick={() => handleClick(")")}>)</button>
      <button onClick={handleDelete}>Del</button> {/* Delete button */}

        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
    </>
  );
};

export default Calculator;
