import React from "react";
import Typography from "@material-ui/core/Typography";
import { footerStyle } from "../styles/FooterStyle";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "@material-ui/core";

export default function Footer (){
  const classes = footerStyle();
  return (
    <footer className={classes.footer}>
      <Typography variant="h3" align="center">
      <Link color="inherit" href="https://www.linkedin.com/in/diana-temirkhan-862bb1172/" target="_blank"> <LinkedInIcon/></Link>{" "}
      <Link color="inherit" href="https://github.com/Rebirthen/" target="_blank"><GitHubIcon/></Link>{" "}
     <Link color="inherit" href="https://www.facebook.com/profile.php?id=100004790386300" target="_blank"><FacebookIcon/></Link>
      </Typography>
    </footer>
  );
};
