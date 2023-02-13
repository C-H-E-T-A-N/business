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
          <div className="input-group">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons"/>
  <button className="btn btn-outline-secondary" type="button">Button</button>
  <button className="btn btn-outline-secondary" type="button">Button</button>
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
