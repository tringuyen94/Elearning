import React from "react"
import "../../Sass/FeelFree.scss"
import SchoolIcon from "@material-ui/icons/School"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import LanguageIcon from "@material-ui/icons/Language"

const FeelFree = () => {
  return (
    <div className="feelfree container-fluid mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="feelfree__intro">
            <h4>Feel Free to Contact Our Agents Directly</h4>
            <p>
              Nulla pellentesque mi non laoreet eleifend. Integer porttitor
              mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum
              est. Cras mi ipsum, consectetur ac ipsum in, egestas vestibulum
              tellus.Proin ac fermentum est. Cras mi ipsum, consectetur ac ipsum
              in, egestas vestibulum tellus.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="feelfree__detail row">
            <div className="col-md-6 mt-3 pt-4">
              <div className="container">
                <LanguageIcon fontSize="large" color="error" />
                <h5>EDUCATION</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container">
                <LibraryBooksIcon fontSize="large" color="error" />
                <h5>EDUCATION</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="col-md-6 mt-3 pt-4">
              <div className="container">
                <SchoolIcon fontSize="large" color="error" />
                <h5>EDUCATION</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container">
                <LanguageIcon fontSize="large" color="error" />
                <h5>EDUCATION</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeelFree
