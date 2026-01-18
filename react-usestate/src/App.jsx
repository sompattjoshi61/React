import { useState } from "react";
import Counter from "./components/Counter";

function App() {



  // let fruit = "Apple";

  // function changeFruit() {
  //   fruit = "Mango";
  //   console.log(fruit);
  // }

  // return (
  //   <>
  //   <h1>State in React Js</h1>
  //   <h1>Fruit: {fruit}</h1>
  //   <button onClick={changeFruit}>Change Fruit</button>
  //   </>
  // )




  const [fruit, setFruit] = useState("Apple");  // this is the default value

  function changeFruit() {
    setFruit("Mango");
    // setFruit(fruit === "Apple" ? "Mango" : "Apple");
    console.log(fruit);
  }

  return (
    <>
      <h1>State in React Js</h1>
      <h1>Fruit: {fruit}</h1>
      <button onClick={changeFruit}>Change Fruit</button>

      <Counter />
    </>
  )
}

export default App
