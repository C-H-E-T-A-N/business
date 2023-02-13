import React from "react";
import { Link } from "react-router-dom";
const AddBn = () => {
  return (
    <div className="container mx-auto">
      <div
        className="row text-center mx-auto position-absolute top-50 start-50 translate-middle"
        style={{ marginTop: "2rem" }}
      >
        <div className="col-sm mb-3">
          <div
            className="card h-100 mx-auto "
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
            className="card h-100 mx-auto"
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
              <div
                
                className="btn btn-primary"
                style={{
                  marginBottom: "3rem",
                  textDecoration: 'none', 
                  color: 'white'
                }}
              >
                <Link to="/ExiBnDt"
                style={{textDecoration: 'none', color: 'white'}}
                >
                Click Here
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBn;
