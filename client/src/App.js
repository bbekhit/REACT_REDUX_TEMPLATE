import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/bootstrap-grid.min.css";
import "./styles/styles.scss"
import './App.css';
import Home from './components/Home';

const Main = withRouter(({ location }) => {
  return (
    <Provider store={store}>
      <div>
        {/* {location.pathname !== "/login" && <Navbar />} */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Provider>
  );
});
function App() {
  return (
    <BrowserRouter>
    <Main />
  </BrowserRouter>
  );
}

export default App;
