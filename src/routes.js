import Signin from "./containers/Signin/Signin";
import Home from "./containers/Layout/Home";

const routes = [
  {
    path: "/",
    exact: true,
    name: "home",
    component: Home
  },
  {
    path: "/signin",
    exact: true,
    name: "signin",
    component: Signin
  }
];

export default routes;
