// import React, { useEffect, useState } from "react";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import directoryReducer from "../../redux/directory/directory.reducer";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  // const [items, setItems] = useState(sections);
  const menuItems = sections.map(({ id, ...otherProps }) => {
    return <MenuItem {...otherProps} key={id} />;
  });

  return <div className="directory-menu">{menuItems}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
