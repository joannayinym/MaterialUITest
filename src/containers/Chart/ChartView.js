import React, { useEffect } from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";

import { dailySalesChart } from "./ChartData";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DrawChart from "./DrawChart";

const useStyles = makeStyles(theme => ({
  chartWrapper: {
    display: "flex",
    flexDeriction: "row",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  root: {
    width: "45%",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: "10%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
      marginLeft: "3%",
      marginRight: "3%"
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

const ChartView = props => {
  const classes = useStyles();

  return (
    <div className={classes.chartWrapper}>
      <Card className={classes.root}>
        <DrawChart />
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <ChartistGraph
            className="ct-chart"
            data={dailySalesChart.data}
            type="Line"
            options={dailySalesChart.options}
            listener={dailySalesChart.animation}
            showArea="true"
          ></ChartistGraph>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <ChartistGraph
            className="ct-chart"
            data={dailySalesChart.data}
            type="Bar"
            options={dailySalesChart.options}
            listener={dailySalesChart.animation}
            showArea="true"
          ></ChartistGraph>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ChartView;
