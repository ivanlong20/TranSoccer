import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Filter from "./Filter";
import PlayerCard from "./PlayerCard";
import { Typography } from "@mui/material";
import { Skeleton } from "@mui/material";

function Body(props) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState();

  useEffect(() => {
    fetch("https://transfer-windows-api-project.onrender.com/premier-league")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  function selectLeague(name) {
    setFilter(name);
    if (name === "Bundesliga") {
      fetch("https://transfer-windows-api-project.onrender.com/bundesliga")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Premier League") {
      fetch("https://transfer-windows-api-project.onrender.com/premier-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "La Liga") {
      fetch("https://transfer-windows-api-project.onrender.com/la-liga")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Serie A") {
      fetch("https://transfer-windows-api-project.onrender.com/serie-a")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Ligue 1") {
      fetch("https://transfer-windows-api-project.onrender.com/ligue-1")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Hong Kong Premier League") {
      fetch(
        "https://transfer-windows-api-project.onrender.com/hk-premier-league"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Eredivisie") {
      fetch("https://transfer-windows-api-project.onrender.com/eredivisie")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Liga Portugal") {
      fetch("https://transfer-windows-api-project.onrender.com/liga-portugal")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Super Lig") {
      fetch("https://transfer-windows-api-project.onrender.com/super-lig")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "J1 League") {
      fetch("https://transfer-windows-api-project.onrender.com/j1-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "K League 1") {
      fetch("https://transfer-windows-api-project.onrender.com/k-league-1")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "A-League") {
      fetch(
        "https://transfer-windows-api-project.onrender.com/australia-a-league"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "MLS") {
      fetch(
        "https://transfer-windows-api-project.onrender.com/major-league-soccer"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Saudi Pro League") {
      fetch(
        "https://transfer-windows-api-project.onrender.com/saudi-pro-league"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "UAE Pro League") {
      fetch("https://transfer-windows-api-project.onrender.com/uae-pro-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Qatar Stars League") {
      fetch(
        "https://transfer-windows-api-project.onrender.com/qatar-stars-league"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }
    console.log(name);
  }
  // console.log(await data.data[0].playerID);

  return (
    <Box>
      <Box
        className={[props.mode === "light" ? "light-image" : "dark-image"]}
        sx={{
          height: "90vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          className={"overlay"}
          sx={{
            height: "90vh",
          }}
        >
          <Typography
            variant="h2"
            marginLeft={10}
            id="transfers"
            sx={{ color: "white" }}
          >
            Transfer Market <br />
            <div style={{ fontWeight: "bold" }}>At a glance.</div>
          </Typography>
        </Box>
        <div class="arrow"></div>
      </Box>
      <Box
        height="100%"
        component="main"
        sx={{
          p: 3,
          justifyContent: "center",
        }}
        className={
          props.mode === "light" ? "light-background" : "dark-background"
        }
      >
        {/* <Box
          sx={{
            mb: 2,
            display: "flex",
            padding: "10px",
          }}
        >
          <Typography
            className="title"
            variant="h4"
            sx={{
              backgroundColor: "#B6C4B6",
              padding: "10px",
            }}
          >
            Recent Transfers
          </Typography>
        </Box> */}
        <Filter
          theme={props.theme}
          selectLeague={selectLeague}
          filter={filter}
        />
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {!loading ? (
            data.data.map((player) => (
              <PlayerCard theme={props.theme} player={player} />
            ))
          ) : (
            <div>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Body;
