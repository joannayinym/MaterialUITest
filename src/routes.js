import Signin from "./containers/Signin/Signin";
import Signup from "./containers/Signup/Signup";
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
  },
  {
    path: "/signup",
    exact: true,
    name: "signup",
    component: Signup
  }
];

export default routes;
