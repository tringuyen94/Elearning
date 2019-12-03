import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { Formik, Form, Field } from "formik"
import { SignUpSchema } from "../../Services/authentication"
import { restConnector } from "../../Services/axiosBaseURL"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    borderRadius: "5%",
    border: "5px solid whitesmoke",

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center"
  },
  button: {
    padding: "10px 20px",
    marginTop: "15px",
    backgroundColor: "transparent",
    color: "white",
    letterSpacing: "1px",
    cursor: "pointer",
    border: "2px solid #ff3c41",
    transition: "all 0.4s ease 0s",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      background: "#ff3c41",
      letterSpacing: "1px",
      fontSize: "20px",
      boxShadow: "5px 40px -10px rgba(0,0,0,0.57)",
      borderRadius: "50px",
      border: "none",
      transition: "all 0.4s ease 0s"
    }
  }
}))
const SingupModal = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const _handleSubmit = value => {
    console.log(value)
    restConnector({
      url: `/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: value
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    handleClose()
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button className={classes.button} onClick={handleOpen}>
        Sign up
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 style={{ color: "white" }}>Register</h2>
            <Formik
              id="transition-modal-description"
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maNhom: "GP09",
                email: ""
              }}
              onSubmit={_handleSubmit}
              validationSchema={SignUpSchema}
              render={formikProps => (
                <Form>
                  <div className="form-group ">
                    <Field
                      name="taiKhoan"
                      placeholder="Username"
                      onChange={formikProps.handleChange}
                      className="form-control"
                    />
                    {formikProps.errors.taiKhoan &&
                      formikProps.touched.taiKhoan && (
                        <p className="alert alert-danger">
                          {formikProps.errors.taiKhoan}
                        </p>
                      )}
                  </div>
                  <div className="form-group">
                    <Field
                      placeholder="Password"
                      type="password"
                      name="matKhau"
                      onChange={formikProps.handleChange}
                      className="form-control"
                      autoComplete="current-password"
                    />
                    {formikProps.errors.matKhau &&
                      formikProps.touched.matKhau && (
                        <p className="alert alert-danger">
                          {formikProps.errors.matKhau}
                        </p>
                      )}
                  </div>
                  <div className="form-group">
                    <Field
                      placeholder="Fulname"
                      type="text"
                      name="hoTen"
                      onChange={formikProps.handleChange}
                      className="form-control"
                    />
                    {formikProps.errors.hoTen && formikProps.touched.hoTen && (
                      <p className="alert alert-danger">
                        {formikProps.errors.hoTen}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <Field
                      placeholder="Email"
                      name="email"
                      onChange={formikProps.handleChange}
                      className="form-control"
                    />
                    {formikProps.errors.email && formikProps.touched.email && (
                      <p className="alert alert-danger">
                        {formikProps.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <Field
                      placeholder="Phonenumber"
                      name="soDT"
                      onChange={formikProps.handleChange}
                      className="form-control"
                    />
                    {formikProps.errors.soDT && formikProps.touched.soDT && (
                      <p className="alert alert-danger">
                        {formikProps.errors.soDT}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      style={{
                        color: "white",
                        padding: "10px 200px",
                        fontSize: "20px"
                      }}
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </Form>
              )}
            ></Formik>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
export default SingupModal
