import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import {BrowserRouter, Link, Route} from "react-router-dom";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping Cart</Link>
              <Link to="Admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen}/>
              <Route path="/" component={HomeScreen}/>
            </main>
            <footer>All right is reserved. @2020 Titan Dymanix Inc (Pty) Ltd, www.titandynamix.co.za/termsconditions</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
