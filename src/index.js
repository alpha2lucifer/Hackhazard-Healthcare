import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
import HospitalList from "./pages/hospital-list";
import HospitalLoginPage from "./pages/hospital-login-page";
import DoctorLoginPage from "./pages/doctor-login-page";
import DoctorList from "./pages/doctor-list";
import PatientRegistration from "./pages/patient-registration";
import DoctorDashboard from "./pages/doctor-dashboard";
import Home from "./pages/home";
import "./global.css";
import Files from "./pages/filles.jsx";
import Record from "./pages/record.jsx";

const muiTheme = createTheme();

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path:"/Home",
    element:<Home/>
  },

  {
    path:"/hospital-list",
    element:<HospitalList/>
  },

  {
    path:"/hospital-login-page",
    element:<HospitalLoginPage/>
  },

  {
    path:"/doctor-login-page",
    element:<DoctorLoginPage/>
  },

  {
    path:"/patient-registration",
    element:<PatientRegistration/>
  },

  {
    path:"/doctor-list",
    element:<DoctorList/>
  },

  {
    path:"/doctor-dashboard",
    element:<DoctorDashboard/>
  },
  {
    path:"/patient-files",
    element:<Files/>
  },
  {
    path:"/records",
    element:<Record/>
  }






]);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






