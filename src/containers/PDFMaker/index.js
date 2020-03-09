import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./PDFMaker";

const PDFMaker = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

export default PDFMaker;
