import React from "react"
import "../../Sass/WhatWeDo.scss"
import SchoolIcon from "@material-ui/icons/School"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import LanguageIcon from "@material-ui/icons/Language"

const WhatWeDo = () => {
  return (
    <div className="whatwedo container mt-5">
      <h2>
        WHAT
        <span> WE DO</span>
      </h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="wwd__item">
            <SchoolIcon className="icon" fontSize="large" color="error" />
            <h5>PROFESSIONAL STUDY </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="wwd__item">
            <LibraryBooksIcon className="icon" fontSize="large" color="error" />
            <h5>SUMMER SESSION</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="wwd__item">
            <LanguageIcon className="icon" fontSize="large" color="error" />
            <h5>GLOBAL EDUCATION</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
