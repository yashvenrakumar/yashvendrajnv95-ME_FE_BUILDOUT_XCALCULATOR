import { useState } from "react";
import "./styles.css";

export default function App() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState(0);

  const handleResult = () => {
    try {
      if (equation === "") {
        throw new Error("Error");
      }
      setResult(eval(equation));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={equation} />
      <div className="result">{result}</div>
      {/* <br /> */}
      <div>
        <button onClick={() => setEquation((prev) => prev + 7)}>7</button>
        <button onClick={() => setEquation((prev) => prev + 8)}>8</button>
        <button onClick={() => setEquation((prev) => prev + 8)}>9</button>
        <button onClick={() => setEquation((prev) => prev + "+")}>+</button>
        <br />
        <button onClick={() => setEquation((prev) => prev + 4)}>4</button>
        <button onClick={() => setEquation((prev) => prev + 5)}>5</button>
        <button onClick={() => setEquation((prev) => prev + 6)}>6</button>
        <button onClick={() => setEquation((prev) => prev + "-")}>-</button>
        <br />
        <button onClick={() => setEquation((prev) => prev + 1)}>1</button>
        <button onClick={() => setEquation((prev) => prev + 2)}>2</button>
        <button onClick={() => setEquation((prev) => prev + 3)}>3</button>
        <button onClick={() => setEquation((prev) => prev + "*")}>*</button>
        <br />
        <button onClick={() => setEquation("")}>C</button>
        <button onClick={() => setEquation((prev) => prev + 0)}>0</button>
        <button onClick={handleResult}>=</button>
        <button onClick={() => setEquation((prev) => prev + "/")}>/</button>
      </div>
    </div>
  );
}
