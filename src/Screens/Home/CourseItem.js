import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchCourseByCategories } from "../../Redux/Actions/Course"
import ReadMoreReact from "read-more-react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "5px 5px 25px #888888"
  }
})

const CourseItem = ({ dispatch, courses, id }) => {
  const classes = useStyles()
  useEffect(() => {
    dispatch(fetchCourseByCategories(id))
    return () => {}
  }, [id])
  console.log(courses)

  const _renderCourseItems = () => {
    return courses
      ? courses.map((item, index) => {
          return (
            <div className="col-md-4 mt-3" key={index}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={item.hinhAnh}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                      {item.tenKhoaHoc}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <ReadMoreReact
                        text={item.moTa}
                        min={10}
                        ideal={20}
                        max={30}
                        readMoreText="..."
                      />
                    </Typography>
                    <Link
                      to={"/course-detail/" + item.maKhoaHoc}
                      className="btn btn-primary"
                    >
                      DETAIL
                    </Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          )
        })
      : null
  }
  return <div className="row">{_renderCourseItems()}</div>
}
const mapStateToProps = state => {
  return {
    courses: state.course.courses
  }
}

export default connect(mapStateToProps)(CourseItem)
