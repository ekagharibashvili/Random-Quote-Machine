import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [quotes, setQuote] = useState('');

  const newQuote = () =>{
    fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuote(data[randomNum]);
    });
  };

  useEffect(() => {
    newQuote();
  }, []);


  return (
    <div className="App">
      <div className="quote-box">
        
        <p className="quote">"{quotes.text}"</p>
        <p className="author">--{quotes.author}</p>
        <div className="btns">
         <button className="click" onClick={newQuote}>New Quote</button>
         <a className="tweet" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
        </div>
      </div>
    </div>
  );
}

export default App;
