import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import Header from "./Header";
import Footer from "./Footer";
import routes from "../../routes";

const useStyles = makeStyles(theme => ({
  home: {
    height: 800
  },
  footer: {
    fontSize: 26
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.home}>
        <Switch>
          {routes.map(router => {
            return (
              <Route
                key={router.name}
                exact={router.exact}
                path={router.path}
                component={router.component}
              />
            );
          })}
        </Switch>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
};

export default Home;
