import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import "../components/mainNav.css"
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    top: 0,
    backgroundColor: "#051724",
    zIndex: 100,
  },
  
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/Home");
    } else if (value === 1) {
      history.push("/Tendance");
    } else if (value === 2) {
      history.push("/Films");
    } else if (value === 3) {
      history.push("/Series");
    } else if (value === 4) {
      history.push("/Rechercher");
    } else if (value === 5) {
      history.push("/Connexion");
    } 
  }, [value, history]);

  return (
    <Fragment>

      
    
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "#54DECE" }}
        label="Accueil"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#54DECE" }}
        label="Tendance"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#54DECE" }}
        label="Films"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#54DECE" }}
        label="Series"
        icon={<TvIcon />}
      />
       <BottomNavigationAction
        style={{ color: "#54DECE" }}
        label="Rechercher"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#54DECE" }}
        label="Connexion"
        icon={<LoginIcon />}
      />
    </BottomNavigation>
   
    <BottomNavigationAction />
    <div>
      <p>Développer avec <FavoriteIcon className="coeur" /> par </p>
      <img src="https://zupimages.net/up/21/49/d21v.png" className="logo_sign"></img>
    </div>
      
    
    </Fragment>
  );
}
