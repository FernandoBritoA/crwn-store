import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectCollectionsForPreview } from "../../Redux/Shop/shopSelectors";
import "./CollectionOverview.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((
      { id, ...otherCollectionProps } //destructuring
    ) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
