import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation";
import PageLecto from "./pages/pageLecto";
import PageError from "./pages/pageError";
import PageAbout from "./pages/pageAbout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div className="container">
            <Switch>
              <Route path="/" component={PageLecto} exact />
              <Route path="/lecto" component={PageLecto} exact />
              {/* <Route path="/bio" component={Bio} />*/}
              <Route path="/about" component={PageAbout} />
              <Route component={PageError} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
