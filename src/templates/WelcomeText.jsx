import React from "react";
import { Typography,Container } from "@material-ui/core/";
import StrongLink from "./../atoms/StrongLink";

export const WelcomeText = ({ classes }) => {
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" paragraph>
          Hi, I'm Diana!
        </Typography>
        <Typography variant="h4" align="center" paragraph>
          I’m a Software Developer at{" "}
          <StrongLink
            classes={classes}
            title="Sberbank"
            url="https://www.sberbank.kz/"
          />
          . Previously at{" "}
          <StrongLink
            classes={classes}
            title="Relog"
            url="https://www.relog.kz/"
          />
          .
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Love fight in{" "}
          <StrongLink
            classes={classes}
            title="Codewars"
            url="https://www.codewars.com/users/Rebirthen/"
          />
          . Wish to work in Google.
        </Typography>
      </Container>
    </div>
  );
};
