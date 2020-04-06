import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useMenuStyles } from "./../styles/HeaderStyle";
import PureMenu from "./../molecules/PureMenu";

export default function Header(props) {
  const classes = useMenuStyles();
  const { sections, title } = props;
  let pageUrl = window.location.href;
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>

        <PureMenu sections={sections} pageUrl={pageUrl} classes={classes} />
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};
