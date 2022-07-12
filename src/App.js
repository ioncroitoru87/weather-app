import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/Auth";
import Nav from "./components/Nav";
import RequireAuth from "./components/RequireAuth";

import CurrentLocation from "./components/CurrentLocation";
import Login from "./pages/Login";
import WeatherDetails from "./components/WeatherDetails";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <StyledContainer>
                  <CurrentLocation />
                </StyledContainer>
              </RequireAuth>
            }
          ></Route>
          <Route path="/:userId" element={<WeatherDetails />} />

          <Route path="login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
