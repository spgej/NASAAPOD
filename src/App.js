import './App.css';
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
const NASA_API =
  "https://api.nasa.gov/planetary/apod?api_key=HrgvaTyc5brnhHTM6peabL5SWx5JlB4x4g5M1ybR&count=1";



function App() {

  const [response, setResponse] = useState("");
  const [isTruncated, setIsTruncated] = useState(true);

  async function fetchNasa() {
    let response = await fetch(NASA_API);
    let data = await response.json();
    setResponse(data[0]);
    setIsTruncated(true);
  }

  return (
    <div className="App">
    <Header />
        <main className="content">
        <h2>Astronomy Picture of the Day</h2>
          <h3>{response.title}</h3>
          <img id="image" alt="space-pic" src={response.url}></img>
          <h6>{response.date}</h6>

          <button 
            className="btn"
            onClick={() => {
              fetchNasa();
              }}
            >
            New Image
            </button>
            <p className={isTruncated ? "description" : "description2"}>{response.explanation}</p>
            <button id="btn" className={isTruncated ? "btn" : "btn2"} onClick={()=> setIsTruncated(false)} >Learn More</button>
        </main>
        <Footer />
    </div>
  );
}

export default App;