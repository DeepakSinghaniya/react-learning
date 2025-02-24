import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

const Login = lazy(() => {
  return import("./pages/Login");
});
const Signup = lazy(() => {
  return import("./pages/Signup");
});
const Shop = lazy(() => {
  return import("./pages/Shop");
});
const Profile = lazy(() => {
  return import("./pages/Profile");
});
const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <ProtectedRoute>
                  <Shop />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Login />
              </Suspense>
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
