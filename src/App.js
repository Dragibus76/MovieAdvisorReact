import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Home/Home";
import { Container } from "@material-ui/core";
import Nav from "./components/Nav"
import Connexion from "./components/Connexion";



function App() {

  return (
    <BrowserRouter>
     <Nav/>
      <div className="app">
        <Container>
        
          <Switch>
          <Route path="/Home" component={Home} exact />
            <Route path="/Tendance" component={Trending}  />
            <Route path="/Films" component={Movies} />
            <Route path="/Series" component={Series} />
            <Route path="/Rechercher" component={Search} />
            <Route path="/Connexion" component={Connexion} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
