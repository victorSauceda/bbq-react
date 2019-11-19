import "./App.css";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { Auth } from "aws-amplify";

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  async function handleLogout() {
    await Auth.signOut();

    setIsAuthenticated(false);

    // props.history.push("/login");
  }
  return (
    <div>
      <BrowserRouter>
        <Header
          appProps={{
            isAuthenticated,
            setIsAuthenticated,
            isAuthenticating,
            setIsAuthenticating
          }}
          handleLogout={handleLogout}
        />
        <Main
          env={props.env}
          appProps={{ isAuthenticated, setIsAuthenticated }}
          handleLogout={handleLogout}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
