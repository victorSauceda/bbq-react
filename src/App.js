import "./App.css";
import Header from "./Header";
import Main from "./Main";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";

function App(props) {
  console.log("App props: ", props);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  async function handleLogout() {
    await Auth.signOut();

    setIsAuthenticated(false);

    props.history.push("/login");
  }
  return (
    <div>
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
        history={props.history}
      />
    </div>
  );
}

export default withRouter(App);
