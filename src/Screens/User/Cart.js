import React, { useState } from "react"
import { connect } from "react-redux"
import { actRemoveItemOnCart } from "../../Redux/Actions/Course"
import { registerCourse } from "../../Redux/Actions/Interface"
import { getCredentialLocal } from "../../Redux/Actions/Authentication"

const Cart = ({ addedCourses, dispatch }) => {
  const [courseId, setCourseId] = useState()
  const [value, setValue] = useState({})
  const _registerCourse = maKhoaHoc => {
    setValue({
      maKhoaHoc: maKhoaHoc,
      taiKhoan: getCredentialLocal("login").taiKhoan
    })
    console.log(value)
    dispatch(registerCourse(value))
    _removeItemOnCart(maKhoaHoc)
  }
  const _removeItemOnCart = maKhoaHoc => {
    setCourseId(maKhoaHoc)
    dispatch(actRemoveItemOnCart(maKhoaHoc))

    console.log(courseId)
    console.log(addedCourses)
  }
  return (
    <div>
      <div
        className="bread__crumb container-fluid"
        style={{
          background: "linear-gradient(#868f96,#596164)",
          height: "78px"
        }}
      ></div>
      <h3 style={{ textAlign: "center", margin: "20px 0" }}>Your cart</h3>
      <div className="container">
        <table className="table table-dark table-striped ">
          <thead>
            <tr>
              <th></th>
              <th>Course Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {addedCourses
              ? addedCourses.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.hinhAnh} width="150px" height="100px" />
                      </td>
                      <td>
                        <h4>{item.tenKhoaHoc}</h4>
                      </td>
                      <td>$49.99</td>
                      <td>
                        <button
                          className="btn btn-success mr-3"
                          onClick={() => _registerCourse(item.maKhoaHoc)}
                        >
                          Register
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => _removeItemOnCart(item.maKhoaHoc)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  )
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    addedCourses: state.course.addedCourseCart
  }
}

export default connect(mapStateToProps)(Cart)
