import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Home/Home";
import { Container } from "@material-ui/core";
import Connexion from "./components/Connexion";
import Apropos from "./Pages/Apropos/Apropos";
import Watchlist from "./Pages/Watchlist/Watchlist";
import Navbar from "./components/NavBar/NavBar";
import FavoriteIcon from '@mui/icons-material/Favorite';
import UnstyledButtonCustom from "./components/ButtonVersion/ButtonVersion";



function App() {

  return (
    <BrowserRouter>
     <Navbar/>
      <div className="app">
        <Container>
        
          <Switch>
          <Route path="/Home" component={Home} exact />
            <Route path="/Tendance" component={Trending}  />
            <Route path="/Films" component={Movies} />
            <Route path="/Series" component={Series} />
            <Route path="/Rechercher" component={Search} />
            <Route path="/Connexion" component={Connexion} />
            <Route path="/Apropos" component={Apropos} />
            <Route path="/Watchlist" component={Watchlist} />
          </Switch>
        </Container>
      </div>
      <div className="footer">
      <p>Développer avec <FavoriteIcon className="coeur" /> par </p>
      <img src="https://zupimages.net/up/21/49/d21v.png" className="logo_sign"></img>
      <UnstyledButtonCustom className="Buttonversion"/>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
