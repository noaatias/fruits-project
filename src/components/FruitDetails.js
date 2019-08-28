import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import "./FruitDetails.css";
import NutriotionForm from "./NutriotionForm";
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
  function deleteNutrition(one) {
    delete fruit.fruit.Nutrition[one];
    getFruits();
  }
  var newbuuton;
  console.log(fruit);
  return (
    <Card>
      {fruit.fruit && fruit.fruit.Overview ? (
        <div>
          <img src={fruit.fruit.Img} style={{width: "auto", height: "16rem"}} />

          <div className="text">
            <h1 className="name">Name:{fruit.fruit.FruitName} </h1>

            <button
              className={
                fruit.fruit.isFavorite
                  ? "btn btn-outline-warning fas fa-star fa-2x "
                  : "btn btn-outline-dark  far fa-star fa-2x"
              }
              onClick={e => {
                console.log(fruit.fruit.isFavorite);
                if (fruit.fruit.isFavorite) {
                  removeFavorite(fruit.fruit);
                  fruit.fruit.isFavorite = false;
                } else {
                  fruit.fruit.isFavorite = true;
                  addFavorite(fruit.fruit);
                }
                console.log(fruit.fruit.Overview.Origin);
              }}
            ></button>

            <a href={fruit.fruit.UrlToWiki}><button className="btn btn-primary">to wiki</button></a>
          </div>

          <div className="all">
            <table className="nutritionTable">
              <h1>Overview:</h1>

              <tr>
                <td> Origin:</td>
                <td>{fruit.fruit.Overview.Origin}</td>
              </tr>
              <tr>
                <td> Genus:</td>
                <td>{fruit.fruit.Overview.Genus}</td>
              </tr>
              <tr>
                <td> year of development:</td>
                <td>{fruit.fruit.Overview.YearOfDevelopment}</td>
              </tr>
            </table>
            <div>
              Nutrition:
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
            </div>
            <table className="nutritionTable">
              {Object.keys(fruit.fruit.Nutrition).map((one, i) => (
                <tr>
                  <td> {Object.keys(fruit.fruit.Nutrition)[i]}:</td>
                  <td>{fruit.fruit.Nutrition[one]}</td>

                  {fruit.fruit.editMode ? (
                    <td>
                      {" "}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={e => deleteNutrition(one)}
                      >
                        x
                      </button>
                    </td>
                  ) : null}
                </tr>
              ))}
            </table>
          </div>
        </div>
      ) : (
        <div>choose fruit</div>
      )}
    </Card>
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
