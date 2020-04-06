import React from "react";
import Link from "@material-ui/core/Link";

const PureLink = props => {
  let { isActive = false, title, url, classes } = props;
  let color = isActive ? "textSecondary" : "inherit";
  return (
    <Link color={color} noWrap href={url} className={classes.toolbarLink}>
      {title}
    </Link>
  );
};

export default PureLink;
