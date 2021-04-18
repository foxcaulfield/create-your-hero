// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";


import ChooseHeroScreen from "./components/ChooseHeroScreen";
import CreateHeroScreen from "./components/CreateHeroScreen";
import store from "./store/reduxStore";

function App() {
  // console.log(store);

  // const [isCreating, setIsCreating] = useState(false)
  return (
    <BrowserRouter  basename="/">
      <Provider store={store}>
        <Route exact path="/">
        </Route>
        <Redirect to="/choose" />
        {/* <Route path="/create">
          <Redirect to="/choose" />
        </Route> */}
        <Route path={"/choose"} render={() => <ChooseHeroScreen />} />
        <Route path={"/create"} render={() => <CreateHeroScreen />} />
      </Provider>
    </BrowserRouter>





  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
  );
}

export default App;
