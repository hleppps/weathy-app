import { FC, useEffect, useState } from "react";
import Header from "./components/Header";
import Carousel from "./components/UI/Carousel";
import { dummyForecastData } from "./constants/dummyData";

const App: FC = () => {
  const [forecastData, setForecastData] = useState(dummyForecastData);

  useEffect(() => {
    // getWeatherForecast("Lviv", 9).then((forecast) => setForecastData(forecast));
    setForecastData(dummyForecastData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Carousel data={forecastData} />
    </div>
  );
};

export default App;
