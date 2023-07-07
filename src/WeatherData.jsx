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
  const iconURL = <img   src={`https://openweathermap.org/img/wn/${wholeData.weather[0].icon}@2x.png`} alt="weatherIcon"/> ; 

  const style = {
    color: "black",
    borderRadius: "25px",
    background: "white",
    marginTop: "30px",
    padding: "15px",
    fontSize: "25px",
    width:"100%"
  };

  const style2= {
    display: "flex",
    justifyContent:"space-between",
    alignItems: "center",
    fontSize: {xs:"20px", sm:"25px", md:"35px", xl:"50px"}
    
  }
  const font ={
    fontSize:{xs:"10px", sm:"20px", md:"25px", xl:"30px"},
    padding:{xs:"5px"}
  }

  return (
        <Grid style={style}>
            <Stack direction={{xs:"column", sm:"row"}} style={style2}>
              <Typography sx={{color:"#8f0b0b", fontWeight:"bold", fontSize:{xs:"25px", sm:"35px", md:"45px", xl:"50px"}}} >{CITY_NAME}</Typography>
              <Stack direction="column">
                <Typography>{iconURL}</Typography>
                <Typography sx={{fontSize:{xs:"10px", sm:"15px", md:"15px", xl:"22px"}, textAlign:"center"}}>{DESC}</Typography>
              </Stack>
            </Stack >
            <Grid>
              <Box style={style2}>
                <Typography sx={font}> Temperature :</Typography>
                <Typography sx={font}>{TEMP}°C</Typography>
              </Box>
              <Box style={style2}>
                <Typography sx={font}> Humidity :</Typography>
                <Typography sx={font}>{HUMIDITY}%</Typography>
              </Box>
              <Box style={style2}>
                <Typography sx={font}> Wind Speed :</Typography>
                <Typography sx={font}>{WIND_SPEED} kmph</Typography>
              </Box>
              <Box style={style2}>
                <Typography sx={font}> Visibility :</Typography>
                <Typography sx={font}>{VISIBILTY} m</Typography>
              </Box>
            </Grid>
        </Grid>
  );
};

export default WeatherData;
