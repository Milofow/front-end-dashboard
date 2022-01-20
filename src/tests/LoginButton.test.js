import React from "react";
import ReactDOM from "react-dom";
import TopBar from "./index";
import {
  useAuth0
} from "react-auth0-spa";
import Dashboard from "../components/Dashboard";

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|12345678901234"
};

// intercept the useAuth0 function and mock it
jest.mock("react-auth0-spa");

describe("Test redirect without login", () => {
  beforeEach(() => {
    // Mock the Auth0 hook and make it return a logged in state
    useAuth0.mockReturnValue({
      isAuthenticated: false,
      user,
      logout: jest.fn(),
    });
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render( < Dashboard / > , div);
  });
});