import { FC, useEffect, useState } from "react";
import Header from "./components/Header";
import Carousel from "./components/UI/Carousel";
import { ForecastCarouselItem } from "./constants";
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
      {/* <Carousel data={forecastData} type={ForecastCarouselItem.Daily} /> */}
      <Carousel data={forecastData[0].hour} type={ForecastCarouselItem.Daily} />
    </div>
  );
};

export default App;
