import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const [countries, setCountries] = useState([]); // Initialize countries to empty array
  const [continent, setContinents] = useState('All'); // Initialize Continents to 'All'
  const [query, setQuery] = useState(''); // Initialize to empty string

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Please wait...</h1>;

  function filterCountries() {
    return countries.filter((country) => {
      country.name.includes(query.value) &&
        (country.continent === continent || continent === 'All');
    });
  }

  return (
    <div className="App">
      <h1>Flags of the World</h1>
      <input
        placeholder="Search Countries"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {countries.map((country) => (
        <p key={country.id}>{country.name}</p>
      ))}
    </div>
  );
}

export default App;
