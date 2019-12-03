import React, { useState, useEffect, Profiler } from "react"
import "./App.scss"
import Header from "./Layouts/Header"
import { connect } from "react-redux"
import HomeScreen from "./Screens/Home/HomeScreen"
import CourseDetail from "./Screens/CourseDetail/CourseDetail"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Footer from "./Layouts/Footer"
import { actFetchCredentials } from "./Redux/Actions/Authentication"
import { restConnector } from "./Services/axiosBaseURL"
import Profile from "./Screens/User/Profile"
import Cart from "./Screens/User/Cart"
import ChangePassword from "./Screens/User/ChangePassword"
import CourseSearch from "./Screens/Search/CourseSearch"

function App({ dispatch }) {
  useEffect(() => {
    let credential = localStorage.getItem("login")
    if (credential) {
      let credentialObj = JSON.parse(credential)
      dispatch(actFetchCredentials(credentialObj))
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/user-profile/:userName" component={Profile} />
          <Route path="/course-detail/:courseId" component={CourseDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/course-search" component={CourseSearch} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default connect()(App)
