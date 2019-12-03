import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchInformation } from "../../Redux/Actions/Interface"

const Profile = ({ credentials, dispatch }) => {
  useEffect(() => {})
  const [value, setValue] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soSDT: "",
    hoTen: "",
    hoTen: "",
    hoTen: ""
  })
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
        <div className="row">
          <div className="col-md-4">
            <img
              src={require("../../images/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b.webp")}
              alt=""
              width="150px"
            />
            {credentials ? (
              <p
                style={{
                  margin: "20px 50px",
                  textAlign: "left",
                  fontWeight: "600"
                }}
              >
                {credentials.hoTen}
              </p>
            ) : null}
            <p>Front-End Developer</p>
          </div>
          <div className="col-md-8">
            <h3>My Profile</h3>
            <form action="">
              {credentials ? (
                <div className="m-2">
                  <span>Email :</span>
                  <input
                    className="form-control"
                    type="text"
                    value={credentials.email}
                  />
                </div>
              ) : null}
              {credentials ? (
                <div className="m-2">
                  <span>Phonenumber:</span>
                  <input
                    className="form-control"
                    type="text"
                    value={credentials.soDT}
                  />
                </div>
              ) : null}
              {credentials ? (
                <div className="m-2">
                  <span>Group ID:</span>
                  <input
                    className="form-control"
                    type="text"
                    value={credentials.maNhom}
                  />
                </div>
              ) : null}
              {credentials ? (
                <div className="m-2">
                  <span>Usertype :</span>
                  <input
                    className="form-control"
                    type="text"
                    value={credentials.maLoaiNguoiDung}
                  />
                </div>
              ) : null}
            </form>

            <button className="btn btn-success m-3">Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    credentials: state.credential.credentials || { item: null }
  }
}

export default connect(mapStateToProps)(Profile)
