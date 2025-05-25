import { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
    } catch (err) {
      alert('City not found!');
      setWeather(null);
      console.log(err);
      
    }
  };

  return (
   <div className="min-h-screen bg-gradient-animated flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl max-w-md w-full p-8
                      border border-white/20 flex flex-col">
        <h1 className="text-4xl font-extrabold mb-8 text-white text-center drop-shadow-lg">
          🌍 Weather Dashboard
        </h1>
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onKeyDown={(e)=>{
              if(e.key==='Enter'){
                fetchWeather()
              }
            }}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-5 py-3 rounded-xl border border-white/40 bg-white/20
                       placeholder-white text-white focus:outline-none focus:ring-4 focus:ring-yellow-300
                       transition duration-300"
          />
          <button
            onClick={fetchWeather}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-xl
                       shadow-lg transition transform hover:scale-105"
          >
            Search
          </button>
        </div>
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
