import React, { useEffect, useRef } from "react";

const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  series: [12, 17, 7, 17, 23, 18, 35.5]
};

const maxNumber = Math.max(...data.series);
const minNumber = Math.min(...data.series);

const calculateAxis = () => {
  const unit = Math.ceil((maxNumber - minNumber) / 4);
  return unit;
};

const calculateY = y => {
  return (y - minNumber) / calculateAxis();
};

const DrawChart = props => {
  const canvasRef = useRef(null);

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const xUnit = 450 / 7;
    const yUnit = 250 / 5;
    ctx.strokeStyle = "black";
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 250);
    ctx.lineTo(500, 250);
    ctx.stroke();
    ctx.moveTo(50, 250 - calculateY(data.series[0]) * yUnit);
    data.series.map((dataItem, index) => {
      const x = 50 + index * xUnit;
      const y = 250 - calculateY(dataItem) * yUnit;
      ctx.strokeStyle = "#FF0000";
      ctx.lineWidth = 5;
      ctx.lineTo(x, y);

      ctx.stroke();
      ctx.moveTo(x, y);
      ctx.strokeText("T", x, 300);
      return null;
    });
    data.series.map((dataItem, index) => {
      const x = 50 + index * xUnit;
      const y = 250 - calculateY(dataItem) * yUnit;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.stroke();
      return null;
    });
  };

  useEffect(() => {
    updateCanvas();
    calculateAxis();
  }, []);
  console.log("ref: ", props);
  return (
    <canvas
      ref={canvasRef}
      width={640}
      height={425}
      style={{ width: "120%" }}
    />
  );
};

export default DrawChart;
