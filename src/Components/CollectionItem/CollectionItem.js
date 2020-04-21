import React from "react";
import "./CollectionItem.scss";
//import CollectionPreview from '../CollectionPreview/CollectionPreview';
import CustomButton from "../CustomButton/CustomButton";

import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/cartActions";

const CollectionItem = ({ item, newAddItem }) => {
  const { name, price, imageUrl } = item; //we want acces to the item as a whole too
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => newAddItem(item)}
        inverted
        isGoogleSignIn={false}
      >
        Add to cart
      </CustomButton>
    </div> //this props item is passed to the store; dispatched
  );
};

const mapDispatchToProps = (dispatch) => ({
  newAddItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
