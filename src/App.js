import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));

  }, []);
  return (
    <div>
      <h2>Travelling In Morjwad</h2>
      <h3>Countries: {countries.length}</h3>
    </div>



  )
}

export default App;
