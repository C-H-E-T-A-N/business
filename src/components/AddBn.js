import React from "react";

const AddBn = () => {
  return (
    <div className="container" >
      <div className="row text-center  position-absolute top-50 start-50 translate-middle" style={{
      marginTop:"2rem",
    }}>
        <div
          className="col-sm mb-3"
          style={
            {
              // marginBottom:"1rem",
            }
          }
        >
          <div
            className="card h-100 "
            style={{
              width: "15rem",
              height: "15rem",
            }}
          >
            <div className="card-body">
              <h6
                className="card-title"
                style={{
                  marginTop: "6rem",
                  marginBottom: "3rem",
                }}
              >
                ADD BUSINESS
              </h6>
              {/* <p className="card-text">Tap to add new business.</p> */}
              <a
                href="/"
                className="btn btn-primary"
                style={{
                  marginBottom: "3rem",
                }}
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm mb-3">
          <div
            className="card h-100"
            style={{
              width: "15rem",
              height: "15rem",
            }}
          >
            <div className="card-body">
              <h6
                className="card-title text-break"
                style={{
                  marginTop: "6rem",
                  marginBottom: "3rem",
                }}
              >
                EXISTING BUSINESS
              </h6>
              {/* <p className="card-text">Tap to edit business.</p> */}
              <a
                href="/"
                className="btn btn-primary"
                style={{
                  marginBottom: "3rem",
                }}
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBn;
