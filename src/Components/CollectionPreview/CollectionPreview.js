import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>
        <Link className="title" to={`/shop/${title.toLowerCase()}`}>
          {title.toUpperCase()}
        </Link>
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4) // we just want 4 items
          .map((item) => {
            // @ts-ignore
            return <CollectionItem key={item.id} item={item}></CollectionItem>;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
