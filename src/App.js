import React, {useState, useEffect} from "react";
import Router from "./router";
import AppBar from "./components/AppBar";
import './App.css';

function App() {

  const [students, setStudents] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/student')
    .then(res => res.json())
    .then(function (result) {
      setStudents(result)
      console.log(result)
    })
    .catch((error) => console.log(error + ' fetching failed, try again'))
  }, [])

  return (
    <div className="App">
      <AppBar />
      <Router students={students}/>
    </div>
  );
}

export default App;
