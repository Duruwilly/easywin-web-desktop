import { Route, Routes } from "react-router-dom";
import "./App.css";
import { profileRoutes, routes } from "./utils/routes";
import AppLayout from "./layouts/AppLayout";
import ProfileLayout from "./layouts/ProfileLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<AppLayout />}>
          {routes?.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>

        <Route element={<ProfileLayout />}>
          {profileRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
