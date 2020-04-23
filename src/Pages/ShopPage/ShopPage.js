import React from "react";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection";

//because in the app.js  the ShopPage component is nested in a route,
//it automatically has access to the 3 objects
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};
//:categoryId -> allows us to acces this id as a parameter on the match object
//when we are inside our category page
//!params:{collectionId:"hats"}
//path: "/sport-store/shop/:collectionId"
//url: "/sport-store/shop/hats"
export default ShopPage;
