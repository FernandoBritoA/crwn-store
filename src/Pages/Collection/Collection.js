import React from "react";
import "./Collection.scss";
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../Redux/Shop/shopSelectors";
//import { firestore } from "../../Firebase/Firebase";
//import  { useEffect } from "react";

const CollectionPage = ({ collection }) => {
  //!useEffect as ComponentWillUnmount() example
  /*useEffect(() => {
    console.log("I am subscribing");
    const unsubscribeFromCollections = firestore
      .collection("collections")
      .onSnapshot((snapshot) => console.log(snapshot));
    //!CLEAN UP FUNCTION
    return () => {
      console.log("I am unsubscribing");
      unsubscribeFromCollections();
    };
  }, []); //use when mounting*/
  //use effect will call the clean up function when component unmounts

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

//first parameter is state
//second parameter is own props from the component
//that we are wrapping in our connect
const mapStateToProps = (state, ownProps) => {
  //oenProps gives us all props from our CollectionPage component
  //including the match passed to our component on ShopPage Route
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    //this is necessary because unlike other selectors,
    //this selector needs a part of the state depending on the URL parameter
    //ownProps.match.params.collectionId = hats
  };
};
export default connect(mapStateToProps)(CollectionPage);
