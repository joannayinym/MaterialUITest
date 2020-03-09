import jsPDF from "jspdf";

const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  colors: ["red", "blue", "pink", "black", "green", "yellow", "purple"],
  series: [12, 27, 45, 17, 12, 18, 35.5]
};

const maxNumber = Math.max(...data.series);
const minNumber = 0;

const lenX = 350;
const lenY = 150;
const lineCount = 4;
let startX = 50;
let startY = 100;
const textX = 15;

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

const xUnit = lenX / (data.series.length + 1);
const yUnit = lenY / lineCount;

export const drawToPdf = () => {
  var doc = new jsPDF({ unit: "pt" });

  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.1);
  doc.line(startX, startY + lenY, lenX, startY + lenY);
  doc.text("0", textX, startY + lenY);
  for (let i = 0; i <= lineCount; i++) {
    doc.line(
      startX,
      startY + lenY - yUnit * i,
      lenX,
      startY + lenY - yUnit * i
    );
    doc.text(String(calculateAxis() * i), textX, startY + lenY - yUnit * i);
  }
  let x1 = startX;
  let x2 = startX;
  let y1 = startY + lenY - calculateY(data.series[0]) * yUnit;
  let y2 = startY + lenY - calculateY(data.series[0]) * yUnit;
  for (let i = 0; i < data.series.length; i++) {
    x1 = x2;
    y1 = y2;
    x2 = startX + i * xUnit;
    y2 = startY + lenY - calculateY(data.series[i]) * yUnit;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.1);
    doc.line(startX + xUnit * i, startY, startX + xUnit * i, startY + lenY);
    doc.setDrawColor(255, 0, 0);
    doc.setLineWidth(1.5);
    doc.line(x1, y1, x2, y2);
    doc.setFillColor(255, 0, 0);
    doc.circle(x1, y1, 3, "F");
    doc.text(String(data.labels[i]), startX + xUnit * i, startY + lenY + 20);
  }
  doc.setFillColor(255, 0, 0);
  doc.circle(x2, y2, 3, "F");

  startX = 50;
  startY = 350;
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.1);
  doc.line(startX, startY + lenY, lenX, startY + lenY);
  doc.text("0", textX, startY + lenY);
  for (let i = 0; i <= lineCount; i++) {
    doc.line(
      startX,
      startY + lenY - yUnit * i,
      lenX,
      startY + lenY - yUnit * i
    );
    doc.text(String(calculateAxis() * i), textX, startY + lenY - yUnit * i);
  }
  for (let i = 0; i < data.series.length; i++) {
    x2 = startX + i * xUnit;
    y2 = calculateY(data.series[i]) * yUnit;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.1);
    doc.line(startX + xUnit * i, startY, startX + xUnit * i, startY + lenY);

    doc.text(String(data.labels[i]), startX + xUnit * i, startY + lenY + 20);
    doc.setDrawColor(0);
    doc.setFillColor(255, 0, 0);
    doc.rect(x2, startY + lenY - y2, 10, y2, "F");
  }

  // doc.setLineWidth(1);
  // doc.setDrawColor(0);
  // doc.setFillColor(255, 0, 0);
  // doc.circle(150, 700, 80, "FD");

  // doc.setLineWidth(1);
  // doc.setDrawColor(0);
  // doc.setFillColor(255, 255, 255);
  // doc.circle(150, 700, 50, "FD");

  var ctx = doc.context2d;

  const sum = data.series.reduce((total, item, index) => {
    return total + item;
  }, 0);

  let angle = 0;
  startX = 400;
  startY = 600;
  for (let i = 0; i < data.series.length; i++) {
    ctx.beginPath();
    ctx.strokeStyle = data.colors[i];
    ctx.lineWidth = 30;
    ctx.arc(150, 650, 50, angle, angle + (Math.PI * 2 * data.series[i]) / sum);
    angle = angle + (Math.PI * 2 * data.series[i]) / sum;
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = data.colors[i];
    ctx.fillRect(startX, startY + 20 * i - 10, 15, 15);
    ctx.fillStyle = "black";
    ctx.fillText(String(data.labels[i]), startX + 40, startY + 20 * i);
    ctx.fillText(String(data.series[i]), startX + 80, startY + 20 * i);
  }

  doc.save("a4.pdf");
  return null;
};
