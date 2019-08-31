import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFruitData} from "../actions/fruit";
import {Link} from "react-router-dom";
import "./FruitDetails.css";

const Favorites = ({favorites}) => {
  return (
    <div className="allFruit">
    <div className="Rtable Rtable--1cols">
    {favorites==[]?(<div>There is no favorites</div>):(null)}
      {favorites.map(fruit => (
          <Link className="Rtable-cell oneFruit" onClick={e => {
            getFruitData(fruit);
            
          }}
          to={{
            pathname: "/FruitDetails",
            state: {
              fruit: fruit
            }
          }}
        > 
      
    

    {fruit.FruitName} <p className="arrow">></p>
   
       
        </Link>
      ))}
      </div>
    </div>
  );
};
Favorites.propTypes = {
  getFruitData: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  fruit: state.fruit,
  favorites: state.fruit.favorites
});
export default connect(
  mapStateToProps,
  {getFruitData}
)(Favorites);
