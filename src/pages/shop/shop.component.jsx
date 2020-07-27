import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";


const ShopPage = ({match}) =>{
    console.log(" from shop page route....",match);
        return ( 
        <div className="shop-page"> 
           <Route exact path={`${match.path}`} component={CollectionsOverviewComponent} />
           <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>)
    }

export default ShopPage;