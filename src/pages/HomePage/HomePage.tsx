import { Box, Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import Carousel from "../../components/UI/Carousel";
import Container from "../../components/UI/Container";
import SearchBox from "../../components/UI/SearchBox";
import { DEFAULT_SELECTED_CITY } from "../../constants";
import { CarouselTypes } from "../../constants/carouselConstants";
import { dummyForecastData } from "../../constants/dummyData";
import { getWeatherForecast } from "../../service/weatherService";

const HomePage: FC = () => {
  const [forecastData, setForecastData] = useState(dummyForecastData);
  const [selectedForecastDay, setSelectedForecastDay] = useState<number>(1);
  const [selectedCity, setSelectedCity] = useState(DEFAULT_SELECTED_CITY);
  const [searchboxErrorMsg, setSearchboxErrorMsg] = useState<null | string>(
    null,
  );

  const setForecastDataHandler = useCallback(() => {
    getWeatherForecast(selectedCity, 3)
      .then((forecast) => {
        setForecastData(forecast!);
        setSearchboxErrorMsg(null);
      })
      .catch((error) => {
        setSearchboxErrorMsg(error.data.error.message);
      });
  }, [selectedCity]);

  useEffect(() => {
    setForecastDataHandler();
    // setForecastData(dummyForecastData);
  }, [selectedCity, setForecastDataHandler]);

  return (
    <>
      <SearchBox
        defaultValue={DEFAULT_SELECTED_CITY}
        onSubmit={setSelectedCity}
        placeholder="Enter a city"
        errorMsg={searchboxErrorMsg}
      />

      <Box marginTop={5}>
        <Carousel
          data={forecastData}
          selectedForecastDay={selectedForecastDay}
          setSelectedForecastDay={setSelectedForecastDay}
          type={CarouselTypes.daily}
        />
      </Box>

      <Box marginTop={5}>
        <Container>
          <Typography variant="h6" sx={{ textDecoration: "underline" }}>
            Unfortunately, API used for this project provides an opportunity to
            get realtime data only for a 3 days (today, +2)
            <br />
            Thus other data is dummy.
          </Typography>
        </Container>
      </Box>

      <Box marginTop={2}>
        <Carousel
          data={forecastData[selectedForecastDay].hour}
          type={CarouselTypes.hourly}
        />
      </Box>
    </>
  );
};

export default HomePage;
