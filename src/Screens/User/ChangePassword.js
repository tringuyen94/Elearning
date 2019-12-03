import React from "react"

const ChangePassword = () => {
  return (
    <div>
      <div
        className="bread__crumb container-fluid"
        style={{
          background: "linear-gradient(#868f96,#596164)",
          height: "78px"
        }}
      ></div>
      <div className="container">
        <h3>Change your password</h3>
        <span>Enter current password : </span>
        <input type="text" className="form-control" />
        <span>Enter new password : </span>
        <input type="text" className="form-control" />
        <span>Retype new password : </span>
        <input type="text" className="form-control" />
        <button className="btn btn-success m-2">Submit</button>
      </div>
    </div>
  )
}

export default ChangePassword
