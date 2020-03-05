import React, { useEffect, useState } from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  series: [12, 117, 270, 117, 12, 318, 35.5]
};

const maxNumber = Math.max(...data.series);
const minNumber = 0;

const calculateAxis = () => {
  let unit;
  const len = String(Math.ceil(maxNumber - minNumber)).length;
  if (len < 2) {
    unit = Math.ceil((maxNumber - minNumber) / 4);
  } else if (len === 2) {
    unit =
      Math.ceil(
        Math.ceil(
          Number(String(Math.ceil(maxNumber - minNumber)).slice(0, 2)) / 4
        ) / 5
      ) * 5;
  } else {
    unit = Math.ceil(
      Number(String(Math.ceil(maxNumber - minNumber)).slice(0, 2)) / 4
    );
    unit = Math.pow(10, len - 2) * unit;
  }

  return unit;
};

const calculateY = y => {
  return (y - 0) / calculateAxis();
};

const SvgChart = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentData, setCurrentData] = useState(0);

  const handlePopoverOpen = (event, data) => {
    setAnchorEl(event.currentTarget);
    setCurrentData(data);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // const canvasRef = useRef(null);

  // const updateSvg = () => {
  // const canvas = canvasRef.current;
  // const ctx = canvas.getContext("2d");
  const xUnit = 450 / 7;
  const yUnit = 250 / 5;

  const xAxis = (
    <>
      <line
        x1="50"
        y1="250"
        x2="500"
        y2="250"
        style={{ stroke: "grey", strokeWidth: 1, strokeDasharray: 2 }}
      />
      <text x="15" y="250" fill="grey">
        0
      </text>
      <line
        x1="50"
        y1="200"
        x2="500"
        y2="200"
        style={{ stroke: "grey", strokeWidth: 1, strokeDasharray: 2 }}
      />
      <text x="15" y="200" fill="grey">
        {calculateAxis()}
      </text>
      <line
        x1="50"
        y1="150"
        x2="500"
        y2="150"
        style={{ stroke: "grey", strokeWidth: 1, strokeDasharray: 2 }}
      />
      <text x="15" y="150" fill="grey">
        {calculateAxis() * 2}
      </text>
      <line
        x1="50"
        y1="100"
        x2="500"
        y2="100"
        style={{ stroke: "grey", strokeWidth: 1, strokeDasharray: 2 }}
      />
      <text x="15" y="100" fill="grey">
        {calculateAxis() * 3}
      </text>
      <line
        x1="50"
        y1="50"
        x2="500"
        y2="50"
        style={{ stroke: "grey", strokeWidth: 1, strokeDasharray: 2 }}
      />
      <text x="15" y="50" fill="grey">
        {calculateAxis() * 4}
      </text>
      <line
        x1="50"
        y1="0"
        x2="500"
        y2="0"
        style={{ stroke: "grey", strokeWidth: 1, strokeDasharray: 2 }}
      />
    </>
  );

  let x1 = 50;
  let y1 = 250;
  let x2 = 50;
  let y2 = 250 - calculateY(data.series[0]) * yUnit;

  const line = data.series.map((dataItem, index) => {
    x1 = x2;
    y1 = y2;
    x2 = 50 + index * xUnit;
    y2 = 250 - calculateY(dataItem) * yUnit;
    return (
      <>
        <line
          key={index}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          style={{ stroke: "rgb(255,0,0)", strokeWidth: 2 }}
        />
        <line
          key={index + 100}
          x1={x2}
          y1={0}
          x2={x2}
          y2={250}
          style={{ stroke: "grey", strokeWidth: 1, strokeDasharray: 2 }}
        />
        <text key={index + 200} x={x2 - 5} y="280" fill="grey">
          {data.labels[index]}
        </text>
      </>
    );
  });
  const dot = data.series.map((dataItem, index) => {
    const x = 50 + index * xUnit;
    const y = 250 - calculateY(dataItem) * yUnit;
    return (
      <>
        <circle
          key={index}
          cx={x}
          cy={y}
          r="5"
          stroke="red"
          strokeWidth="3"
          fill="red"
          onMouseEnter={(event, data) => handlePopoverOpen(event, dataItem)}
          onMouseLeave={handlePopoverClose}
        />
      </>
    );
  });

  useEffect(() => {
    calculateAxis();
  }, []);
  return (
    <>
      <p>SVGChart</p>
      <svg viewBox="0 0 500 500">
        {xAxis}
        {line}
        {dot}
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>{currentData}</Typography>
        </Popover>
        Sorry, your browser does not support inline SVG.
      </svg>
    </>
  );
};

export default SvgChart;
