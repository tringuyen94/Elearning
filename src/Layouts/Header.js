import React, { useState, useEffect } from "react"
import "../Sass/Header.scss"
import SingupModal from "../Screens/AuthModal/SingupModal"
import AppsIcon from "@material-ui/icons/Apps"
import LoginModal from "../Screens/AuthModal/LoginModal"
import { connect } from "react-redux"
import { ToastContainer } from "react-toastify"
import { actLogOut } from "../Redux/Actions/Authentication"
import { Link, Redirect, Route } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
const useStyles = makeStyles({
  avatar: {
    display: "inline-block"
  }
})
const Header = ({ dispatch, addedCourses, credentials, lengthCart }) => {
  const classes = useStyles()
  const logOutNotify = () => toast("See you later !")
  const _logOut = () => {
    dispatch(actLogOut())
    localStorage.clear()
    logOutNotify()
  }

  return (
    <>
      <nav>
        <ToastContainer />
        <div className="row">
          <div className="col-md-2">
            <div className="brand__name">
              <Link to={"/"}>
                SUBJECT
                <br />
                <span>education</span>
              </Link>
            </div>
          </div>
          <div className="col-md-8">
            <div className="my__navbar ">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/course-search"}>Courses</Link>
                </li>
                <li>
                  <Link to={"/"}>About</Link>
                </li>
                <li>
                  <Link to={"/"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            {credentials ? (
              <div>
                <span
                  style={{
                    background: "red",
                    borderRadius: "20%",
                    position: "absolute",
                    top: "25%",
                    left: "10%",
                    padding: "0 5px",
                    color: "white",
                    fontWeight: 600,
                    textAlign: "center"
                  }}
                >
                  {lengthCart ? lengthCart : null}
                </span>
                <div className="dropdown">
                  <Link to={"/cart"}>
                    <i
                      class="fa fa-shopping-cart"
                      style={{ color: "white", fontSize: "23px" }}
                    ></i>
                  </Link>

                  <button
                    className="dropdown-toggle m-3"
                    data-toggle="dropdown"
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    {credentials.hoTen}
                    <Avatar
                      src={require("../images/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b.webp")}
                      className={classes.avatar}
                    />
                  </button>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item"
                      to={"/user-profile/" + credentials.taiKhoan}
                    >
                      Profile
                    </Link>
                    <Link className="dropdown-item" to={"/cart"}>
                      Your Cart
                    </Link>
                    <Link to={"/change-password"} className="dropdown-item">
                      Change new passWord
                    </Link>
                    <Link
                      className="dropdown-item"
                      style={{ cursor: "pointer" }}
                      onClick={_logOut}
                      to={"/"}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row p-2">
                <LoginModal />
                <SingupModal />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
const mapStateToProps = state => {
  return {
    addedCourses: state.course.addedCourseCart,
    credentials: state.credential.credentials,
    lengthCart: state.course.lengthCart
  }
}

export default connect(mapStateToProps)(Header)
