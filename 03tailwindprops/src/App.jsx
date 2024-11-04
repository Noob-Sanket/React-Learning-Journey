import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Sanket",
    age: 25,
    address: {
      city: "Ranchi",
      state: "Jharkhand",
      country: "India",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 ">Vite with Tailwind</h1>
      <Card
        url="https://i.pinimg.com/236x/03/44/88/034488d7e86c4062ed8a77317c11e1f9.jpg"
        username="Hanuman"
        address="Hampi"
      />
      <Card
        url="https://i.pinimg.com/736x/8a/c7/81/8ac78182f7b898da8fdc3377c8b813c6.jpg"
        username="Maruti"
        address="Kishkindha"
        myArr={newArr}
      />
      <Card
        url="https://i.pinimg.com/236x/d8/9e/2c/d89e2cc9eda10ace44db30eff62bbb24.jpg"
        username="Neem Karoli Baba"
        address="Kaichidham"
      />
    </>
  );
}

export default App;
