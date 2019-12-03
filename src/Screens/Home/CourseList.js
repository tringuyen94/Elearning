import React, { useEffect, useState } from "react"
import "../../Sass/CourseList.scss"
import { connect } from "react-redux"
import { fetchCategories } from "../../Redux/Actions/Course"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import CourseItem from "./CourseItem"
const useStyles = makeStyles({
  button: {
    padding: "15px 0",
    background: "linear-gradient(#434343,#000000)",
    color: "white",
    transition: "all .5s ease",
    "&:focus": {
      background: "#ff3c41",
      "&:hover": {
        color: "white"
      }
    },
    "&:hover": {
      color: "#cc2105"
    }
  },
  grid: {
    marginRight: "60px"
  }
})
const CourseList = ({ dispatch, categories }) => {
  const [idCategory, setIdCategory] = useState("BackEnd")
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  const classes = useStyles()
  const _getIdCategory = id => {
    setIdCategory(id)
  }

  const _renderCategories = () => {
    return categories
      ? categories.map((item, index) => {
          return (
            <Button
              className={classes.button}
              onClick={() => _getIdCategory(item.maDanhMuc)}
              key={index}
            >
              {item.tenDanhMuc}
            </Button>
          )
        })
      : null
  }
  return (
    <div className="course__list container-fluid">
      <h2>
        COURSE
        <span> LIST</span>
      </h2>
      <Grid item className={classes.grid}>
        <ButtonGroup
          className="m-4"
          fullWidth="true"
          variant="contained"
          size="small"
        >
          {_renderCategories()}
        </ButtonGroup>
      </Grid>
      <CourseItem id={idCategory} />
    </div>
  )
}
const mapStateToProps = state => {
  return {
    categories: state.category.categories
  }
}

export default connect(mapStateToProps)(CourseList)
