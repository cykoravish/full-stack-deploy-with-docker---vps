import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // fetch("http://localhost:4000/api/message")
    fetch("http://72.61.227.248:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(err=>console.log("error: ", err))
  }, []);
  return (
    <>
      <h1>welcome to cykoravish</h1>
      <p>{message}</p>
    </>
  );
}

export default App;
