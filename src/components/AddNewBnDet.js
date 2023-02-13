import React from 'react'

export default function AddNewBnDet() {
  return (
    <div>
      <div className="container">
        <h1 className='my-3'>New business Details</h1>
        <form>
        <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
            <input type="text" className="form-control" id="exampleInputAddress1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPhone1" className="form-label">Phone No.</label>
            <input type="number" className="form-control" id="exampleInputPhone1"/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Add</button>
        <button type="submit" className="btn btn-primary btn-lg mx-5">Add Items</button>
        </form>
      </div>
    </div>
  )
}
