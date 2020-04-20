import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { workStyles } from "./../styles/WorkStyle";
import { WelcomeText } from "./../templates/WelcomeText";
import { Projects } from "./../organisms/Projects";
import Header from "../organisms/Header";

const cards = [
  {
    title: "Sberbank",
    heading: "Sberbank",
    image: "sber.png",
    url: "https://www.sberbank.kz/",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    title: "Relog",
    heading: "Relog",
    url: "https://www.relog.kz/",
    image: "relog.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    title: "Dzungla",
    heading: "Dzungla",
    url: "https://www.dzungla.kz/",
    image: "dzungla.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    title: "Weather",
    heading: "Weather",
    url: "https://www.rebirthen.github.io/weather",
    image: "weather-app.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  }
];

export default function Work() {
  const classes = workStyles();

  return (
    <React.Fragment>
    <Header title="Diana Temirkhan"  />
      <CssBaseline />
      <main>
        <WelcomeText classes={classes} />
        <Projects cards={cards} classes={classes} />
      </main>
    </React.Fragment>
  );
}
