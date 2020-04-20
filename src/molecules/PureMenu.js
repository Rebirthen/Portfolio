// src/Projects.js

import React from "react";
import PureLink from "./../atoms/PureLink";

function PureMenu({ sections,classes }) {
 
  return sections.map(({ title, url,name}) => {
    let pageUrl = window.location.href;
    let isActive =
      pageUrl.substr(pageUrl.lastIndexOf("/") + 1) === name;
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
