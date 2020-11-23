import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import NavbarPage from './navbar'

const ReportPage = () => {
  return (
    <>
      <br />
      <NavbarPage />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4"> Add Educational Report</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                School Name
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Educational Title
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactSubjectEx"
                className="grey-text"
              >
                Date of Submission
              </label>

              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="3"
              />
              <div className="text-center mt-4">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroupFileAddon01"
                    >
                      Upload
                    </span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choose file
                    </label>
                  </div>
                </div>

                <MDBBtn color="warning" outline type="submit">
                  Submit
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ReportPage;
