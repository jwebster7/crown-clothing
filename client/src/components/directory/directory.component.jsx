// import React, { useEffect, useState } from "react";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import directoryReducer from "../../redux/directory/directory.reducer";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => {
  // const [items, setItems] = useState(sections);
  const menuItems = sections.map(({ id, ...otherProps }) => {
    return <MenuItem {...otherProps} key={id} />;
  });

  return <DirectoryMenuContainer>{menuItems}</DirectoryMenuContainer>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
