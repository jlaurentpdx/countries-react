import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const [countries, setCountries] = useState([]); // Initialize countries to empty array
  const [continent, setContinent] = useState('All'); // Initialize Continents to 'All'
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
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'All')
      );
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
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
      {filterCountries().map((country) => (
        <div key={country.id}>
          <img src={`https://flagcdn.com/16x12/${country.iso2.toLowerCase()}.png`} />
          <span>{' ' + country.name}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
