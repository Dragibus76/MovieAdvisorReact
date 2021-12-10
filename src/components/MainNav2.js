import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useHistory } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import "../components/mainNav.css"
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#051724",
    zIndex: 100,
  },
  
});

export default function SimpleBottomNavigation2() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/Apropos");
    } else if (value === 1) {
      history.push("/Watchlist");
    } else if (value === 2) {
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
        label="Apropos"
        icon={<MenuBookIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#54DECE" }}
        label="WatchList"
        icon={<LiveTvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#54DECE" }}
        label="Connexion"
        icon={<LoginIcon />}
      />

    </BottomNavigation>
   
    <BottomNavigationAction />
    
      
    
    </Fragment>
  );
}
