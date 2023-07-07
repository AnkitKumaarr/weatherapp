import { useState } from "react";
import WeatherData from "./WeatherData";
import {Grid, IconButton,Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import './App.css';

function App() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState({});

  const fetchData = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=5777de25449ad4a0ad3611f3795129e4`
    )
      .then((res) => res.json())
      .then((d) => setData(d))
    };

  const getData = (e) => {
    e.preventDefault();
    fetchData(cityName);
  };
  return (
    <Stack 
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
      className="bg"
    >
      <Stack>
        <Typography sx={{ fontFamily: "monospace",
                          fontWeight: "bold",
                          fontSize: {xs:"40px", sm:"50px", md:"60px", xl:"70px"},
                          color: "white",
                          textAlign:"center"
          }}
            >WEATHER APP
        </Typography>
        </Stack>
      <Stack sx={{width:{xl:"30%", md:"40%", sm:"50%", xs:"50%"}}}>
      <Grid component="form" onSubmit={getData}
          sx ={{
              display:"flex",
              justifyContent:"space-around",
              background:"white",
              alignItems:"center",
              borderRadius: 3,
            
              boxShadow: 'none',
          }}>
          <TextField placeholder="Search...."
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      sx={{width:"94%"}}
                      required/>
          <IconButton type="submit" sx={{ pr: "10px", color: "blue"}} aria-label="search">
            <SearchIcon sx={{fontSize:"35px"}} />
          </IconButton>
      </Grid>
          {Object.keys(data).length !== 0 && data.cod === 200 && (
            <WeatherData data={data} />
          )}
          {
            Object.keys(data).length !== 0 && data.cod === "404" && (
              <Typography variant="h5" sx={{color:"red", fontWeight:"bold", ml:"25px"}}>
                {data.message}....
              </Typography>
            )
          }
        </Stack>
      </Stack>  
  );
}

export default App;
