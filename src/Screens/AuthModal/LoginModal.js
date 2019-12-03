import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { Formik, Form, Field } from "formik"
import { SignUpSchema } from "../../Services/authentication"
import {
  fetchCredentials,
  fetchFacebook
} from "../../Redux/Actions/Authentication"
import { connect } from "react-redux"
import "../../Sass/LoginModal.scss"
import FacebookIcon from "@material-ui/icons/Facebook"
import FacebookLogin from "react-facebook-login"
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
    margin: "0 10px",
    backgroundColor: "transparent",
    color: "white",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.4s ease 0s",
    border: "2px solid #cc2105",
    "$:focus": {
      outline: "none"
    },
    "&:hover": {
      background: " #cc2105",
      letterSpacing: "1px",
      fontSize: "20px",
      boxShadow: "5px 40px -10px rgba(0,0,0,0.57)",
      transition: "all 0.4s ease 0s",
      borderRadius: "50px",
      border: "none"
    }
  },
  MuiIcon: {
    fontSize: "50px",
    color: "#3b5998",
    marginBottom: "-20px"
  },
  MuiIcon2: {
    color: "#1da1f2",
    fontSize: "50px",
    marginBottom: "-20px"
  },
  title: {
    color: "white"
  }
}))
const LoginModal = ({ dispatch }) => {
  const responseFacebook = response => {
    console.log(response)
    dispatch(fetchFacebook(response))
    handleClose()
  }
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const _handleSubmit = value => {
    dispatch(fetchCredentials(value))
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
        Sign In
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
            <h2 className={classes.title}>Login</h2>
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: ""
              }}
              onSubmit={_handleSubmit}
              render={({ handleChange, values }) => (
                <Form className="form">
                  <div className="form-group">
                    <Field
                      className="form-control"
                      name="taiKhoan"
                      placeholder="Username"
                      onChange={handleChange}
                      value={values.taiKhoan}
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      className="form-control"
                      name="matKhau"
                      placeholder="Password"
                      type="password"
                      onChange={handleChange}
                      value={values.matKhau}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btnLogin border border-success"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <div className="form-group">
                    <FacebookIcon className={classes.MuiIcon} />
                    <FacebookLogin
                      appId="531427971010413"
                      fields="name,email,picture"
                      callback={responseFacebook}
                    />
                  </div>
                </Form>
              )}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default connect()(LoginModal)
