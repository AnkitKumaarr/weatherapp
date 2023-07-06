import { useState } from "react";
import WeatherData from "./WeatherData";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
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
      <Typography
        sx={{
          fontFamily: "monospace",
          fontWeight: "bold",
          fontSize: "65px",
          color: "white",
          textAlign:"center"
        }}
      >
        WEATHER APP
      </Typography>
      <Stack
        direction="row"
        sx={{
          width: { sm: "100%", md: "100%", xl: "100%" },
          background: "",
          borderRadius: "12px"
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Box >
          <Paper component="form" onSubmit={getData} sx ={{
              borderRadius: 20,
              border: '1px solid #e3e3e3',
              pl: 2,
              boxShadow: 'none',
          }}>
          <input
            placeholder="Search...."
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            style={{
              borderRadius: "12px",
              padding: "10px",
              borderStyle: "none",
              focus:'none',
              fontFamily: "monospace",
              fontSize: "25px",
              outline:"none"
            }}
            required
          />
          <IconButton
            type="submit"
            sx={{ pr: "10px", color: "blue"}}
            aria-label="search"
          >
            <SearchIcon sx={{fontSize:"40px"}} />
          </IconButton>
          </Paper>
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
        </Box>
      </Stack>
    </Stack>
  );
}

export default App;
