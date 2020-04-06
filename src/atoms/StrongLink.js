import React from "react";
import Link from "@material-ui/core/Link";

const StrongLink = props => {
  let { title, url, classes } = props;
  return (
    <Link color="secondary" noWrap href={url} className={classes.toolbarLink} target="_blank">
      {title}
    </Link>
  );
};

export default StrongLink;
