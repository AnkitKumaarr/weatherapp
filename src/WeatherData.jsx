import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";



const WeatherData = (props) => {
  const wholeData = props?.data;
  const CITY_NAME = wholeData.name;
  const TEMP =  wholeData.main.temp ;
  const WIND_SPEED =  wholeData.wind.speed;
  const HUMIDITY = wholeData.main.humidity ;
  const VISIBILTY = wholeData.visibility;
  const DESC = wholeData.weather[0].description;
  const iconURL = <img src={`https://openweathermap.org/img/wn/${wholeData.weather[0].icon}@2x.png`} alt="weatherIcon"/> ; 

  const style = {
    color: "black",
    borderRadius: "25px",
    background: "white",
    marginTop: "30px",
    padding: "15px",
    fontSize: "25px",
    fontWeight: "bold",
    width:"100%"
  };

  const style2= {
    display: "flex",
    justifyContent:"space-between",
    alignItems: "center",
    padding:"20px",
    fontWeight:"bold"
  }

  return (
    <>
        <Grid style={style}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Box  style={style2}>
              <Typography variant="h4" sx={{color:"#8f0b0b", fontWeight:"bold", fontSize:"40px"}} >{CITY_NAME}</Typography>
              <Stack direction="column" >
                <Typography>{iconURL}</Typography>
                <Typography>{DESC}</Typography>
              </Stack>
            </Box>
            <Box>
              <Box style={style2}>
                <Typography variant="h5"> Temperature :</Typography>
                <Typography variant="h5">{TEMP}°C</Typography>
              </Box>
              <Box style={style2}>
                <Typography variant="h5"> Humidity :</Typography>
                <Typography variant="h5">{HUMIDITY}%</Typography>
              </Box>
              <Box style={style2}>
                <Typography variant="h5"> Wind Speed :</Typography>
                <Typography variant="h5">{WIND_SPEED} kmph</Typography>
              </Box>
              <Box style={style2}>
                <Typography variant="h5"> Visibility :</Typography>
                <Typography variant="h5">{VISIBILTY} m</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
    </>
  );
};

export default WeatherData;
