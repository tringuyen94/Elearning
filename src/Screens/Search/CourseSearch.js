import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchCourseAll } from "../../Redux/Actions/Course"
import CourseItemSearch from "./CourseItemSearch"

const CourseSearch = ({ dispatch, courseAll }) => {
  useEffect(() => {
    dispatch(fetchCourseAll())
  }, [])
  const [keyword, setKeyWord] = useState("")
  const [courseFilter, setCourseFilter] = useState([])

  const handleChange = e => {
    setKeyWord(e.target.value)
  }
  const searchCourse = keyword => {
    console.log(keyword)
    setCourseFilter(
      courseAll.filter(course => course.tenKhoaHoc.indexOf(keyword.trim()) > -1)
    )
    console.log(courseFilter)
  }
  const _renderCourseItem = () => {
    if (!keyword) {
      return courseAll
        ? courseAll.map((item, index) => {
            return (
              <div key={index} className="col-md-3 mt-3">
                <CourseItemSearch course={item} />
              </div>
            )
          })
        : null
    } else {
      return courseFilter
        ? courseFilter.map((item, index) => {
            return (
              <div key={index} className="col-md-3 mt-3">
                <CourseItemSearch course={item} />
              </div>
            )
          })
        : null
    }
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
      <h2 style={{ textAlign: "center" }}>ALL COURSE</h2>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            onClick={() => searchCourse(keyword)}
            className="btn btn-primary"
          >
            <i class="fa fa-search"></i>
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          onChange={e => handleChange(e)}
          placeholder="Enter your name course"
        />
      </div>

      <div className="row">{_renderCourseItem()}</div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    courseAll: state.course.courseAll
  }
}
export default connect(mapStateToProps)(CourseSearch)
