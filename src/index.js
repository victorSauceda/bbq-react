import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import env from "./config";
import "bootstrap/dist/css/bootstrap.min.css";
import Amplify from "aws-amplify";
import config from "./configAWS";
import { BrowserRouter } from "react-router-dom";
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "rest-api",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
      {
        name: "stripe",
        endpoint: "https://otihxshkpe.execute-api.us-east-1.amazonaws.com/dev",
        region: "us-east-1"
      }
    ]
  }
});

console.log("env", env);
console.log("config", config);

ReactDOM.render(
  <BrowserRouter>
    <App env={env} />
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
