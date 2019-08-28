import React, {Fragment, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addFruit} from "../actions/fruit";
const NutriotionForm = ({addFruit,fruit}) => {
  console.log(fruit.fruit)
  const [formData, setFormData] = useState({
    Calories: fruit.fruit.Nutrition.Calories,
    Sugar: fruit.fruit.Nutrition.Sugar,
    DietaryFiber: fruit.fruit.Nutrition.DietaryFiber,
    Protein:fruit.fruit.Nutrition.Protein ,
  });
  const [displayModal, toggleModal] = useState(false);

  var name ;
  var value;
var i=0;
  const onChange = e =>{
    console.log(e.target)
    if(e.target.name=='key'){
      name=(e.target.value)

    }
    else{
      value=(e.target.value)

    }

  }

  const onSubmit =  e => {
    console.log(name,value)
    var newFruit;
    e.preventDefault();
    console.log(e.target.input)
    console.log(formData,name)
newFruit=fruit.fruit;
newFruit.Nutrition=formData
    setFormData( formData[name]= value);
i=0;
    console.log(formData)
      toggleModal(!displayModal);
      addFruit(newFruit);
     
       name =[];

    }
  

  return (
    <>
      <button className="btn btn-success btn-sm" onClick={e => toggleModal(!displayModal)}>+</button>
      {displayModal && (
        <MDBModal isOpen={true}>
          <MDBModalHeader toggle={() => toggleModal(!displayModal)}>
            +
          </MDBModalHeader>
          <form onSubmit={e => onSubmit(e)}>
            <MDBModalBody>
              <div className="form-group">
                <MDBRow>
                  <MDBCol>
                    {" "}
                    <MDBInput
                      name="key"
                      label="new nutrition name"
                      onChange={e => onChange(e)}
                    />
                    <MDBInput
                      name="value"
                      label="new nutrition value"
                      onChange={e => onChange(e)}
                    />
                  </MDBCol>
                </MDBRow>
                
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => toggleModal(!displayModal)}
              >
                Close
              </MDBBtn>
              <MDBBtn color="primary" type="submit">
                add nutriotion
              </MDBBtn>
            </MDBModalFooter>
          </form>
        </MDBModal>
      )}
    </>
  );
};

NutriotionForm.propTypes={
  addFruit:PropTypes.func.isRequired,
  fruit:PropTypes.object.isRequired
  }
  const mapStateToProps=state=>({
      fruit:state.fruit, 
      addFruit:state.addFruit

  })
  export default connect(mapStateToProps,{addFruit})(NutriotionForm);
