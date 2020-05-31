import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./global-style";

import Main from "./test-folder/main";
import Home from "./test-folder/home";
import Login from "./test-folder/login";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route
          exact
          path="/"
          // render={() => {
          //   console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
          //   window.location = "/home";
          // }}
        >
          <HashRouter>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </HashRouter>
        </Route>
        <Route
          exact
          path="/main/:id"
          render={({ match }) => {
            console.log("match: ", match.params.id);
            return <Main />;
          }}
        />
        <Route path="/*" render={() => <div>Error</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
