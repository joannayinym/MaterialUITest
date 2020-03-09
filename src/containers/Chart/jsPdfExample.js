import jsPDF from "jspdf";

export const jsPdfExample = () => {
  var pdf = new jsPDF("p", "pt", "letter");
  var ctx = pdf.context2d;

  var y = 0;
  var h = 20;
  var pad = 10;
  var textHeight = 20;
  ctx.font = "20pt times";

  // Text and Fonts
  ctx.save();
  ctx.fillText("Testing fillText, strokeText, and setFont", 20, y + textHeight);
  y += textHeight + pad;

  ctx.font = "10pt times";
  ctx.fillText("Hello PDF", 20, y + textHeight);
  y += textHeight + pad;

  ctx.font = "10pt courier";
  ctx.fillText("Hello PDF", 20, y + textHeight);
  y += textHeight + pad;

  ctx.font = "10pt courier bold";
  ctx.fillText("Hello Bold PDF", 20, y + textHeight);
  y += textHeight + pad;

  ctx.font = "10pt courier italic";
  ctx.fillText("Hello Italic PDF", 20, y + textHeight);
  y += textHeight + pad;

  ctx.font = "50pt courier bold";
  ctx.fillText("Hello PDF", 20, y + 50);
  y += 50 + pad;

  ctx.font = "50pt courier bold";
  ctx.strokeText("Hello PDF", 20, y + 50);
  y += 50 + pad;

  ctx.font = "20pt courier bold";
  ctx.strokeText("Hello PDF", 20, y + 20);
  y += 20 + pad;

  ctx.font = "20pt courier bold";
  ctx.fillText("Hello PDF", 20, y + 20);
  y += 20 + pad;

  ctx.restore();

  // CSS Color Names
  ctx.save();
  ctx.fillText("Testing CSS color names", 20, y + textHeight);
  y += textHeight + pad;

  ctx.fillStyle = "red";
  ctx.fillText("Red", 20, y + textHeight);
  y += textHeight + pad;

  ctx.fillStyle = "green";
  ctx.fillText("Green", 20, y + textHeight);
  y += textHeight + pad;

  ctx.strokeStyle = "blue";
  ctx.strokeText("Blue", 20, y + textHeight);
  y += textHeight + pad;
  ctx.restore();

  //
  // Text baseline
  //
  ctx.save();
  ctx.fillText("Testing textBaseline", 20, y + textHeight);
  y += textHeight + pad + 30;

  ctx.strokeStyle = "#dddddd";
  ctx.font = "20pt times";

  ctx.moveTo(20, y);
  ctx.lineTo(150, y);
  ctx.stroke();
  ctx.textBaseline = "alphabetic";
  ctx.fillText("Alphabetic Q", 20, y);
  y += 40 + pad;

  ctx.moveTo(20, y);
  ctx.lineTo(150, y);
  ctx.stroke();
  ctx.textBaseline = "ideographic";
  ctx.fillText("Ideographic Q", 20, y);
  y += 40 + pad;

  ctx.moveTo(20, y);
  ctx.lineTo(150, y);
  ctx.stroke();
  ctx.textBaseline = "top";
  ctx.fillText("Top Q", 20, y);
  y += 40 + pad;

  ctx.moveTo(20, y);
  ctx.lineTo(150, y);
  ctx.stroke();
  ctx.textBaseline = "bottom";
  ctx.fillText("Bottom Q", 20, y);
  y += 40 + pad;

  ctx.moveTo(20, y);
  ctx.lineTo(150, y);
  ctx.stroke();
  ctx.textBaseline = "middle";
  ctx.fillText("Middle Q", 20, y);
  y += 40 + pad;

  ctx.moveTo(20, y);
  ctx.lineTo(150, y);
  ctx.stroke();
  ctx.textBaseline = "hanging";
  ctx.fillText("Hanging Q", 20, y);
  y += 40 + pad;

  ctx.restore();

  pdf.addPage();
  y = 0;
  //
  // rectangles
  //
  ctx.save();
  ctx.fillText("Testing fillRect and strokeRect", 20, y + textHeight);
  y += textHeight + pad;

  ctx.fillRect(20, y, 20, h);
  y += h + pad;

  ctx.fillStyle = "#f5f5f5";
  ctx.fillRect(20, y, 20, h);
  y += h + pad;

  ctx.strokeRect(20, y, 20, h);
  y += h + pad;
  ctx.restore();

  //
  // lines
  //
  // line caps

  ctx.save();
  ctx.fillText("Testing lineCap", 20, y + textHeight);
  y += textHeight + pad;
  ctx.lineWidth = 5;
  ctx.lineCap = "butt";
  ctx.moveTo(20, y);
  ctx.lineTo(200, y);
  ctx.stroke();
  y += pad;
  ctx.lineCap = "round";
  ctx.moveTo(20, y);
  ctx.lineTo(200, y);
  ctx.stroke();
  y += pad;
  ctx.lineCap = "square";
  ctx.moveTo(20, y);
  ctx.lineTo(200, y);
  ctx.stroke();
  y += pad;
  ctx.restore();

  // line joins
  ctx.save();
  ctx.fillText("Testing lineJoin", 20, y + textHeight);
  y += textHeight + pad;
  ctx.lineWidth = 10;
  ctx.lineJoin = "miter";
  ctx.moveTo(20, y);
  ctx.lineTo(200, y);
  ctx.lineTo(250, y + 50);
  ctx.stroke();
  y += pad + 10;
  ctx.lineJoin = "bevel";
  ctx.moveTo(20, y);
  ctx.lineTo(200, y);
  ctx.lineTo(250, y + 50);
  ctx.stroke();
  y += pad + 10;
  ctx.lineJoin = "round";
  ctx.moveTo(20, y);
  ctx.lineTo(200, y);
  ctx.lineTo(250, y + 50);
  ctx.stroke();
  y += pad + 10;
  y += 50;
  ctx.restore();

  ctx.fillText("Testing moveTo, lineTo, stroke, and fill", 20, y + textHeight);
  y += textHeight + pad;

  // diamond
  ctx.moveTo(30, y);
  ctx.lineTo(50, y + 20);
  ctx.lineTo(30, y + 40);
  ctx.lineTo(10, y + 20);
  ctx.lineTo(30, y);
  ctx.stroke();
  y += 50;

  // diamond
  ctx.moveTo(30, y);
  ctx.lineTo(50, y + 20);
  ctx.lineTo(30, y + 40);
  ctx.lineTo(10, y + 20);
  ctx.lineTo(30, y);
  ctx.closePath();
  ctx.fill();
  y += 50;

  //
  // arcs
  //
  pdf.addPage();
  y = 0;
  ctx.fillText("Testing arc, stroke, and fill", 20, y + textHeight);
  y += textHeight + pad + 20;

  ctx.arc(50, y, 20, -10, 170, false);
  ctx.stroke();
  y += pad + 40;

  ctx.arc(50, y, 20, -10, 170, true);
  ctx.stroke();
  y += pad + 40;

  ctx.arc(50, y, 20, 0, Math.PI, false);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.stroke();
  y += pad + 40;

  ctx.arc(50, y, 20, 0, Math.PI, true);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
  y += pad + 40;

  ctx.arc(50, y, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.stroke();
  y += pad + 40;

  ctx.arc(50, y, 20, 0, 2 * Math.PI, false);
  ctx.fill();
  y += pad + 40;

  ctx.arc(50, y, 20, 0, Math.PI, false);
  ctx.fill();
  y += pad + 40;

  pdf.addPage();
  y = 0;
  // fill and stroke styles
  ctx.fillText("Testing fillStyle and strokeStyle", 20, y + textHeight);
  y += textHeight + pad;

  // test fill style
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(20, y, 20, h);
  y += h + pad;

  ctx.fillStyle = "#00ff00";
  ctx.fillRect(20, y, 20, h);
  y += h + pad;

  ctx.fillStyle = "#0000ff";
  ctx.fillRect(20, y, 20, h);
  y += h + pad;

  // test stroke style
  ctx.strokeStyle = "#ff0000";
  ctx.strokeRect(20, y, 20, h);
  y += h + pad;

  ctx.strokeStyle = "#00ff00";
  ctx.strokeRect(20, y, 20, h);
  y += h + pad;

  ctx.strokeStyle = "#0000ff";
  ctx.strokeRect(20, y, 20, h);
  y += h + pad;

  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#000000";

  // test save and restore (should be red and large)
  ctx.save();
  ctx.fillStyle = "#ff0000";
  ctx.strokeStyle = "#ff0000";
  ctx.save();
  ctx.fillStyle = "#0000ff";
  ctx.strokeStyle = "#0000ff";
  ctx.font = "10pt courier";
  ctx.restore();

  ctx.fillText(
    "Testing save and restore (Should be red and large)",
    20,
    y + textHeight
  );
  y += textHeight + pad;

  ctx.fillRect(20, y, 20, h);
  y += textHeight + pad;
  ctx.strokeRect(20, y, 20, h);
  y += textHeight + pad;
  ctx.fillText("Hello PDF", 20, y + textHeight);
  y += textHeight + pad;

  ctx.restore();

  //

  pdf.addPage();
  y = pad;
  ctx.fillText("Testing bezierCurveTo", 20, y + textHeight);
  y += textHeight + pad;

  ctx.save();
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#333";
  ctx.beginPath();
  ctx.moveTo(100, y);
  ctx.bezierCurveTo(150, y + 100, 350, y + 100, 400, y);
  ctx.stroke();
  ctx.restore();

  y += 100 + pad;
  ctx.save();
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#333";
  ctx.beginPath();
  ctx.moveTo(100, y);
  ctx.bezierCurveTo(150, y + 100, 350, y + 100, 400, y);
  ctx.fill();
  ctx.restore();

  y += 100 + pad;
  ctx.fillText("Testing quadraticCurveTo", 20, y + textHeight);
  y += textHeight + pad;
  ctx.save();
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#333";
  ctx.beginPath();
  ctx.moveTo(100, y);
  ctx.quadraticCurveTo(250, y + 100, 400, y);
  ctx.stroke();
  ctx.restore();

  y += 100 + pad;
  ctx.save();
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#333";
  ctx.beginPath();
  ctx.moveTo(100, y);
  ctx.quadraticCurveTo(250, y + 100, 400, y);
  ctx.fill();
  ctx.restore();

  pdf.addPage();
  y = 0;
  pdf.save("a4.pdf");
  return null;
};
