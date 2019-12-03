import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { actFetchCredentials } from "../../Redux/Actions/Authentication"
import { restConnector } from "../../Services/axiosBaseURL"
import { actAddCourseToCart } from "../../Redux/Actions/Course"
import { toast } from "react-toastify"
import { connect } from "react-redux"
import "react-toastify/dist/ReactToastify.css"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    boxShadow: "5px 5px 25px #888888"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})
const CourseItemSearch = ({ dispatch, course }) => {
  const classes = useStyles()
  const cartNotify = () => toast("You have to login first!")

  const handlePutOnCart = () => {
    let credential = localStorage.getItem("login")
    if (credential) {
      let credentialObj = JSON.parse(credential)
      dispatch(actFetchCredentials(credentialObj))
      restConnector.defaults.headers[
        "Authorization"
      ] = `Bearer ${credentialObj.accessToken}`
      dispatch(actAddCourseToCart(course))
    } else {
      cartNotify()
    }
  }
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={course.hinhAnh}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {course.tenKhoaHoc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handlePutOnCart()}>
          Cart
        </Button>
        <Link
          to={`course-detail/${course.maKhoaHoc}`}
          size="small"
          color="primary"
        >
          Detail
        </Link>
      </CardActions>
    </Card>
  )
}

export default connect()(CourseItemSearch)
