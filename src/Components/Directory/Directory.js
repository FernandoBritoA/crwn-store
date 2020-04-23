import React from "react";
import "./Directory.scss";
import MenuItem from "../MenuItem/MenuItem";
//import MenuWrapper from '../MenuWrapper/MenuWrapper';
import { connect } from "react-redux";
import { selectDirectorySections } from "../../Redux/Directory/directorySelectors";
import { createStructuredSelector } from "reselect";

//we dont need the constructor nor the state anymore
//ergo we dont need the class component
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {/*map({id, ...otherSectionProps}) */}
    {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        image={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
