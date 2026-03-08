import { useEffect, useState } from "react";
import { Search } from "../search/Search";

export const Weather = ({ API_KEY }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${API_KEY}`,
      );
      const data = await res.json();
      if (data) {
        setWeatherData(data);
        console.log(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(search);
    setSearch("");
  };

  useEffect(() => {
    fetchWeatherData("dhaka");
  }, []);

  if (loading) return <h2>Loading Data...Please wait</h2>;

  return (
    <div className="weather-card">
      <h1 className="card-heading">Weather App</h1>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <div>{weatherData.weather[0].description}</div>
          <div>
            <p>
              Temparature: {(weatherData.main.temp - 273).toFixed(2)} Celsius
            </p>
            <p>
              Feels Like: {(weatherData.main.feels_like - 273).toFixed(2)}{" "}
              Celsius
            </p>
            <p>Wind Speed: {weatherData.wind.speed}</p>
          </div>
          <div>
            <p>
              Sunrise:{" "}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                },
              )}
            </p>
            <p>
              Sunset:{" "}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                },
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
