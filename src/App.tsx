import { FC, useEffect, useState } from "react";
import Header from "./components/Header";
import Carousel from "./components/UI/Carousel";
import { dummyForecastData } from "./constants/dummyData";
// import { getWeatherForecast } from "./service/weatherService";

const App: FC = () => {
  const [forecastData, setForecastData] = useState(dummyForecastData);
  const [selectedForecastDay, setSelectedForecastDay] = useState<number>(1);

  useEffect(() => {
    // getWeatherForecast("Lviv", 3).then((forecast) => setForecastData(forecast));
    setForecastData(dummyForecastData);
  }, []);

  return (
    <div className="App" style={{ marginBottom: 20 }}>
      <Header />
      <Carousel
        data={forecastData}
        selectedForecastDay={selectedForecastDay}
        setSelectedForecastDay={setSelectedForecastDay}
      />
      <Carousel data={forecastData[selectedForecastDay].hour} />
    </div>
  );
};

export default App;
