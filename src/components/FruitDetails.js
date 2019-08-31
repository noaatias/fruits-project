import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Card} from "react-bootstrap";
import "./FruitDetails.css";
import NutriotionForm from "./NutriotionForm";
import {Link} from "react-router-dom";

import {
  getFruitData,
  getFruits,
  addFavorite,
  removeFavorite
} from "../actions/fruit";

const FruitDetails = ({
  getFruitData,
  getFruits,
  fruit,
  addFavorite,
  removeFavorite
}) => {
  function deleteNutrition(oneNutrition) {
    delete fruit.fruit.Nutrition[oneNutrition];
    getFruits();
  }
  return (
    <div className="total">
      
        
        <Link  className="back" to="/">
          <i /> &lt; Back
        </Link>
      
      <h1 className="info">Fruit Info</h1>
      {fruit.fruit && fruit.fruit.Overview ? (
        <>
          <div class="flex-container">
            <img className="fruitImg" src={fruit.fruit.Img} />

            <div >
              <div>Fruit name:</div>
              <h2 className="name">
                {fruit.fruit.FruitName}

                <i
                  className={
                    fruit.fruit.isFavorite
                      ? " fas fa-star favorite"
                      : " far fa-star favorite"
                  }
                  onClick={e => {
                    if (fruit.fruit.isFavorite) {
                      removeFavorite(fruit.fruit);
                      fruit.fruit.isFavorite = false;
                    } else {
                      fruit.fruit.isFavorite = true;
                      addFavorite(fruit.fruit);
                    }
                  }}
                ></i>
              </h2>

              <a href={fruit.fruit.UrlToWiki}>
                <button className="wiki">Show in wiki</button>
              </a>
            </div>
          </div>
          <p>Overview:</p>
          <div className="wrapTable">
            <div class="Rtable Rtable--2cols">
              <div class="Rtable-cell">Origin:</div>
              <div class="Rtable-cell">{fruit.fruit.Overview.Origin}</div>

              <div class="Rtable-cell">Genus:</div>
              <div class="Rtable-cell">{fruit.fruit.Overview.Genus}</div>

              <div class="Rtable-cell">year of development:</div>
              <div class="Rtable-cell">
                {fruit.fruit.Overview.YearOfDevelopment}
              </div>
            </div>
          </div>
          <div >
            <p className="title2">
              Nutrition:{" "}
              <button
                className="btn btn-primary btn-sm"
                onClick={e => {
                  if (fruit.fruit.editMode) {
                    fruit.fruit.editMode = false;
                  } else fruit.fruit.editMode = true;
                  getFruitData(fruit.fruit);
                }}
              >
                edit
              </button>
              {fruit.fruit.editMode ? (
                <NutriotionForm
                  fruitNut={fruit.fruit.Nutrition}
                ></NutriotionForm>
              ) : null}
            </p>
            <div className="wrapTable">
              <div class="Rtable Rtable--2cols">
                {Object.keys(fruit.fruit.Nutrition).map((one, i) => (
                  <>
                    <div class="Rtable-cell">
                      {Object.keys(fruit.fruit.Nutrition)[i]}:
                    </div>
                    <div class="Rtable-cell">
                      {fruit.fruit.Nutrition[one]}
                      {fruit.fruit.editMode ? (
                        <>
                          <i
                            className="fas fa-minus-circle delete"
                            onClick={e => deleteNutrition(one)}
                          ></i>
                        </>
                      ) : null}
                    </div>
                  </>

                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>choose fruit</div>
      )}
    </div>
  );
};
FruitDetails.propTypes = {
  getFruits: PropTypes.func.isRequired,
  fruit: PropTypes.object.isRequired,
  getFruitData: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  fruit: state.fruit
});
export default connect(
  mapStateToProps,
  {getFruitData, getFruits, addFavorite, removeFavorite}
)(FruitDetails);
