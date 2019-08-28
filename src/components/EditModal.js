import React, {useState, Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Button, Modal} from "react-bootstrap";
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
import { editFruit} from "../actions/fruit";

const EditModal = (props) => {
  //const { fruit } = props.location.state

  // const [formData, setFormData] = useState({
  //   Descripe: "",
  //   Img: "",
  //   startDate: "",
  //   endDate: "",
  //   Price: ""
  // });

  const [displayModal, toggleModal] = useState(false);

  // const onChange = e => {
  //   setFormData({...formData, [e.target.name]: e.target.value});
  // };

  // const onSubmit = e => {
  //   e.preventDefault();

  //   editVacation( formData, fruit);
  //   toggleModal(!displayModal);
  // };

  return (
    <div>
      <MDBBtn
        onClick={async e => {
          // await getVacationData(vacationId);
          await toggleModal(!displayModal);
        }}
      >
        Edit{" "}
      </MDBBtn>
      {/* {displayModal && vacation !== null && (
        <MDBModal isOpen={true}>
          <MDBModalHeader toggle={() => toggleModal(!displayModal)}>
            Edit
          </MDBModalHeader>
          <form onSubmit={e => onSubmit(e)}>
            <MDBModalBody>
              <div className="form-group">
                <MDBRow>
                  <MDBCol>
                    {" "}
                    <MDBInput
                      name="Descripe"
                      label="Vacation description"
                      onChange={e => onChange(e)}
                      valueDefault={vacation[0].Descripe}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      name="Img"
                      label="Image"
                      onChange={e => onChange(e)}
                      valueDefault={vacation[0].Img}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size={6}>
                    <MDBInput
                      type="date"
                      name="startDate"
                      label="startDate"
                      onChange={e => onChange(e)}
                      valueDefault={vacation[0].startDate}
                    />
                  </MDBCol>
                  <MDBCol size={6}>
                    <MDBInput
                      type="date"
                      name="endDate"
                      label="endDate"
                      onChange={e => onChange(e)}
                      valueDefault={vacation[0].endDate}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    {" "}
                    <MDBInput
                      name="Price"
                      label="Price"
                      onChange={e => onChange(e)}
                      valueDefault={vacation[0].Price}
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
                add vacation
              </MDBBtn>
            </MDBModalFooter>
          </form>
        </MDBModal>
      )} */}
    </div>
  );
};
EditModal.propTypes={
  getFruits:PropTypes.func.isRequired,
  fruit:PropTypes.object.isRequired
  }
  const mapStateToProps=state=>({
      fruit:state.fruit
  })
  export default connect(null,{})(EditModal);
