import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Dashboard,
  Home,
  LoginAdmin,
  LoginUser,
  PageRoutes,
  SigninAdmin,
  SigninUser,
} from "@/pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.login} element={<LoginUser />} />
        <Route path={PageRoutes.signin} element={<SigninUser />} />
        <Route path={PageRoutes.home} element={<Home />} />
        <Route path={PageRoutes.loginAdmin} element={<LoginAdmin />} />
        <Route path={PageRoutes.signinAdmin} element={<SigninAdmin />} />
        <Route path={PageRoutes.dashboard} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
