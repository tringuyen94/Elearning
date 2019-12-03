import React, { useEffect } from "react"
import { connect } from "react-redux"
import {
  fetchCourseDetail,
  actAddCourseToCart
} from "../../Redux/Actions/Course"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import {
  actFetchCredentials,
  getCredentialLocal
} from "../../Redux/Actions/Authentication"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    boxShadow: "5px 5px 25px #888888"
  },
  media: {
    height: 200
  }
})

const CourseDetail = ({ dispatch, match, courseDetail }) => {
  useEffect(() => {
    dispatch(fetchCourseDetail(match.params.courseId))
  }, [])
  const classes = useStyles()
  const cartNotify = () => toast("You have to login first!")
  const { maKhoaHoc, tenKhoaHoc, hinhAnh, moTa } = courseDetail
  const _renderDanhMucKhoaHoc = () => {
    return courseDetail.danhMucKhoaHoc ? (
      <div className="col-md-4">
        <p style={{ fontSize: "13px", lineHeight: "20px" }}>
          Category:
          <br />
          <span style={{ fontSize: "16px" }}>
            {courseDetail.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </span>
        </p>
      </div>
    ) : null
  }
  const _renderNguoiTao = () => {
    return courseDetail.nguoiTao ? (
      <div className="col-md-4">
        <p style={{ fontSize: "13px", lineHeight: "20px" }}>
          Teacher:
          <br />
          <span style={{ fontSize: "16px" }}>
            {courseDetail.nguoiTao.hoTen}
          </span>
        </p>
      </div>
    ) : null
  }
  const _handlePutOnCart = () => {
    if (getCredentialLocal("login")) {
      dispatch(actFetchCredentials(getCredentialLocal("login")))
      dispatch(actAddCourseToCart(courseDetail))
    } else {
      cartNotify()
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

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="container">
              <h3>{tenKhoaHoc}</h3>
              <div className="row">
                {_renderNguoiTao()}
                {_renderDanhMucKhoaHoc()}
                <div className="col-md-4 p-3">
                  Rate :<i class="fa fa-star"></i>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half"></i>
                </div>
              </div>
              <p style={{ textAlign: "left" }}>{moTa}</p>
            </div>
          </div>
          <div className="col-md-6">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={hinhAnh}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    $19.99
                  </Typography>
                  <Button
                    className="mb-2"
                    size="large"
                    variant="contained"
                    fullWidth="true"
                    color="secondary"
                    onClick={_handlePutOnCart}
                  >
                    CART
                  </Button>
                  <Button variant="contained" size="large" fullWidth="true">
                    BUY
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div>
          <h3>What you will learn</h3>
          <div className="container border p-2">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <MenuBookIcon className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, numquam.
                </p>
                <p>
                  <MenuBookIcon className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, numquam.
                </p>
                <p>
                  <MenuBookIcon className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, numquam.
                </p>
                <p>
                  <MenuBookIcon className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, numquam.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <MenuBookIcon className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, impedit.
                </p>
                <p>
                  <MenuBookIcon className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, impedit.
                </p>
                <p>
                  <MenuBookIcon className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, impedit.
                </p>
                <p>
                  <MenuBookIcon className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, impedit.
                </p>
                <p>
                  <MenuBookIcon className="mr-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h3>Course Content</h3>
        {/* <iframe
          width={560}
          height={315}
          src="https://www.youtube.com/embed/NfU6FSm9_hc"
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    courseDetail: state.courseDetail.courseDetail || { items: null }
  }
}

export default connect(mapStateToProps)(CourseDetail)
