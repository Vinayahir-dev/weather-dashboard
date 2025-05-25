function WeatherCard({ weather }) {
  const { name, main, weather: weatherInfo, wind } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
     <div className="glassmorphism p-6 rounded-3xl shadow-xl max-w-sm mx-auto 
                    text-center backdrop-blur-md bg-white/30 border border-white/40
                    animate-fadeIn">
      <h2 className="text-3xl font-extrabold mb-2 text-white drop-shadow-lg">{name}</h2>
      <img
        src={iconUrl}
        alt={weatherInfo[0].description}
        className="mx-auto mb-2 w-32 h-32 transform hover:scale-110 transition-transform duration-500 ease-in-out"
      />
      <p className="text-5xl font-bold text-yellow-300 drop-shadow-md">
        {Math.round(main.temp)}°C
      </p>
      <p className="capitalize italic text-white/90 mb-3">{weatherInfo[0].description}</p>
      <div className="flex justify-around text-white/80 font-semibold flex-col">
        <p className="flex flex-col items-center">
          <span className="material-icons mb-1 mt-3 text-yellow-400 animate-bounce">water_drop</span>
          Humidity: {main.humidity}%
        </p>
        <p className="flex flex-col items-center">
          <span className="material-icons mb-1 mt-3 text-yellow-400 animate-bounce">air</span>
          Wind: {wind.speed} m/s
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
