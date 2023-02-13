import React from "react";
import DateTime from "./DateTime";

export default function ExiBnDt() {
  return (
    <>
      <div
        className="position-absolute"
        style={{
          right: "0.5rem",
          top: "5rem",
        }}
      >
        <DateTime />
      </div>
      <div>
        <div
          className="position-absolute card border-dark"
          style={{
            width: "18rem",
            // margin: "2rem 0rem 0rem 2rem",
            top: "5rem",
            left: "1.5rem",
            height: "15rem",
          }}
        >
          <div className="card-body">
            
              <p> prop.Bname </p>
              <p> prop.Id</p>
              <p> prop.Adress </p>
              <p> prop.Number </p>
              <p> prop.Mail </p>
            
            
          </div>
        </div>
        
        <div
          className="container position-absolute"
          style={{
            // margin: "2rem 0rem 0rem 2rem",
            width: "80rem",
            top: "25rem",
            left: "0.8rem",
          }}
        >
          <form>
            <div className="row mb-2 mx-0">
                <div className="col sm-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
                </div>
              <div className="col-sm-5">
                
                <input
                  type="text"
                  className="form-control border-dark"
                  placeholder="Item Name"
                />
              </div>
              <div className="col-sm-2">
                <input
                  type="text"
                  
                  className="form-control border-dark"
                  placeholder="Quantity "
                />
              </div>
              <div className="col-sm-4">
                <button type="button" className="btn btn-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="24"
                    fill="currentColor"
                    className="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="row mb-2 mx-0">
            <div className="col sm-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
                </div>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control border-dark"
                  placeholder="Item Name"
                />
              </div>
              <div className="col-sm-2">
                <input
                  type="text"
                  style={
                    {
                      //width:"3rem",
                    }
                  }
                  className="form-control border-dark"
                  placeholder="Quantity "
                />
              </div>
              <div className="col-sm-4">
                <button type="button" className="btn btn-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="24"
                    fill="currentColor"
                    className="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end position-absolute" style={{
            right:"28.5rem",
            top:"33rem",

        }}>
  <button className="btn btn-primary me-md-2" type="button">Add Item</button>
  <button className="btn btn-primary" type="button">Generate Bill</button>
</div>
      </div>
    </>
  );
}
