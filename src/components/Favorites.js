import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFruitData} from "../actions/fruit";
import {Link} from "react-router-dom";

const Favorites = ({favorites}) => {
  return (
    <div className="card">
      {favorites.map(fruit => (
        <div className="oneFruit">
          <Link
            to={{
              pathname: "/FruitDetails",
              state: {
                fruit: fruit
              }
            }}
          >
            <button
              className="list"
              onClick={e => {
                getFruitData(fruit);
              }}
            >
              {fruit.FruitName}
            </button>
          </Link>
        </div>
      ))}
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
