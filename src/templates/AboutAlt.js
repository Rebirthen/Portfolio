import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import StrongLink from "../atoms/StrongLink";
import { aboutStyles } from "../styles/AboutStyle";



export default function AboutAlt() {
  const classes = aboutStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <strong>I've been coding over two years</strong>
          </Typography>
          <br/>
    
          <Typography variant="h5" align="left" paragraph>
            My passion to solve complex problems is unmeasurable cause I love
            the feeling when it is getting done. I feel that I'm growing
            professionally by working in IT companies and gaining experience
            from several projects. Also I'm looking forward to work
            remotely
          </Typography>
            <Grid container>
              <Grid >
                <Typography variant="h6" align="left" paragraph>
                  Past work experience:{" "}
                  <StrongLink
                    classes={classes}
                    url="https://www.linkedin.com/in/diana-temirkhan-862bb1172/"
                    title="Linkedin"
                  />
                </Typography>
              </Grid>
              <Grid >
              <Typography variant="h6" align="left" paragraph>
              Send me a hello: <StrongLink classes={classes} url="mailto:rebirthed.flame@gmail.com" title="rebirthed.flame@gmail.com"/>
      
               
              </Typography>
              </Grid>
            </Grid>
        
        </div>
      </Grid>
    </Grid>
  );
}
