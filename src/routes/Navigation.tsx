import { Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from "../logo.svg";
import { IRoute, routes } from "./routes";

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />
            <ul>
              {routes.map((route: IRoute) => (
                <li key={route.to}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map((route: IRoute) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
