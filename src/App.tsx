import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/dashboard";
import CreateEmployee from "./pages/dashboard/CreateEmployee";
import EditEmployee from "./pages/dashboard/EditEmployee";
import SignIn from "./pages/sign-in";
import { RequireAuth } from "./utils/privateRoute";

function App() {
  return (
    <Routes>
      {/* Sign in */}
      <Route path="/" element={<SignIn />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      {/* Add Employee */}
      <Route
        path="/dashboard/create"
        element={
          <RequireAuth>
            <CreateEmployee />
          </RequireAuth>
        }
      />

      {/* Edit Employee */}
      <Route
        path="/dashboard/:id"
        element={
          <RequireAuth>
            <EditEmployee />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
