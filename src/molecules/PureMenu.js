// src/Projects.js

import React from "react";
import PureLink from "./../atoms/PureLink";

function PureMenu({ sections, pageUrl, classes }) {
  return sections.map(({ title, url }) => {
    let isActive =
      pageUrl.substr(pageUrl.lastIndexOf("/") + 1) === url.replace("/", "");
    return (
      <PureLink
        isActive={isActive}
        title={title}
        key={title}
        url={url}
        classes={classes}
      />
    );
  });
}

export default PureMenu;
