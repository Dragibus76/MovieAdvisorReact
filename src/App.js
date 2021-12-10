import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import SimpleBottomNavigation2 from "./components/MainNav2";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Home/Home";
import { Container } from "@material-ui/core";
import Connexion from "./components/Connexion";
import Apropos from "./Pages/Apropos/Apropos";
import Watchlist from "./Pages/Watchlist/Watchlist";



function App() {

  return (
    <BrowserRouter>
     
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
      <SimpleBottomNavigation2 />
      <SimpleBottomNavigation />
      
    </BrowserRouter>
  );
}

export default App;
