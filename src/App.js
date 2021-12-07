import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      console.log(data);
      setCountries(data);
    };
    fetchData();
  }, []);

  return <div className="App"></div>;
}

export default App;
