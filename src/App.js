import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import ChooseHeroScreen from "./components/ChooseHeroScreen";
import CreateHeroScreen from "./components/CreateHeroScreen";
import store from "./store/reduxStore";

function App() {
  return (
    <BrowserRouter basename="/">
      <Provider store={store}>
        <Route exact path="/"></Route>
        <Redirect to="/choose" />
        <Route path={"/choose"} render={() => <ChooseHeroScreen />} />
        <Route path={"/create"} render={() => <CreateHeroScreen />} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
