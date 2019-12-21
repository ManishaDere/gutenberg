import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from "./App";
import BooksInfo from "./BooksInfo";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/books">
            <BooksInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
