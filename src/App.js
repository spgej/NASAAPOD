import './App.css';
import { useState } from "react";
const NASA_API =
  "https://api.nasa.gov/planetary/apod?api_key=HrgvaTyc5brnhHTM6peabL5SWx5JlB4x4g5M1ybR&count=1";


function App() {

  const [imgUrl, setImgUrl] = useState('https://media.istockphoto.com/photos/space-background-wiht-stars-stock-image-picture-id1287901429?b=1&k=20&m=1287901429&s=170667a&w=0&h=RH6-KPEq-WYftCxoKnQixr8SOwyHlWr8F8EfloDmTxg=');
  const [imgTitle, setImgTitle] = useState('Daily Image Title');
  const [imgDate, setImgDate] = useState('Date the image was taken.');
  const [imgInfo, setImgInfo] = useState('Description of the daily image.');

  async function fetchNasa() {
    let response = await fetch(NASA_API);
    let data = await response.json(); 
    setImgUrl(data[0].url)
    setImgDate(data[0].date)
    setImgInfo(data[0].explanation)
    setImgTitle(data[0].title)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>NASA</h1>
      <h2>Astronomy Picture of the Day</h2>
      </header>
        <main className="content">
          <h3>{imgTitle}</h3>
          <img id="image" src={imgUrl}></img>
          <h6>{imgDate}</h6>

          <button 
            className="btn"
            onClick={() => {
              fetchNasa();
              }}
            >
            New Image
            </button>
            <p>{imgInfo}</p>
        </main>
    </div>
  );
}

export default App;