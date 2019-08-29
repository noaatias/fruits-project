import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFruits, getFruitData} from "../actions/fruit";
import {Link} from "react-router-dom";
import "./FruitDetails.css";

const Fruits = ({
  getFruits,
  getFruitData,
  favorites,
  fruit: {fruits, loading}
}) => {
  useEffect(() => {
    getFruits();
  }, [getFruits]);
  return (
    <div className="card">
      {fruits.map(fruit => (
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
Fruits.propTypes = {
  getFruits: PropTypes.func.isRequired,
  fruit: PropTypes.object.isRequired,
  getFruitData: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  fruit: state.fruit,
  favorites: state.fruit.favorites
});
export default connect(
  mapStateToProps,
  {getFruits, getFruitData}
)(Fruits);
