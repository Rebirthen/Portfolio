
import React from "react";
import AboutAlt from "../templates/AboutAlt";
import { CssBaseline } from "@material-ui/core";
import Header from "../organisms/Header";

export default function About() {

  return (
    <React.Fragment>
    <Header title="Diana Temirkhan"  />
    <CssBaseline />
    <main>
    <AboutAlt/>
    </main>
    </React.Fragment>
  );
}