import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { IRoute } from "../../interface/route.interface";
import { routes } from "../../routes/routes-2";

const LazyLayout = () => {
  return (
    <>
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
      <Routes>
        {routes.map((route: IRoute) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        ))}

        <Route path="*" element={<Navigate replace to="home" />} />
      </Routes>
    </>
  );
};

export default LazyLayout;
