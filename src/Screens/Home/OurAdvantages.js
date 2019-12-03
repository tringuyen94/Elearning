import React from "react"
import "../../Sass/OurAdvantages.scss"

const OurAdvantages = () => {
  return (
    <div className="advantages container mt-5">
      <h2>
        OUR <span>ADVANTAGES</span>
      </h2>
      <div className="advantages__item1 mt-5">
        <div className="row">
          <div className="advantages__image1 col-md-6">
            <img src={require("../../images/p1.jpg")} alt="" />
          </div>
          <div className="advantages__intro1 col-md-6">
            <h5>INTEGER PORTTITOR MOLLISAR</h5>
            <h3>Laoreet Eleifend </h3>
            <p>
              Nulla pellentesque mi non laoreet eleifend. Integer porttitor
              mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum
              est. Cras mi ipsum, consectetur ac ipsum in, egestas vestibulum
              tellus
            </p>
          </div>
        </div>
      </div>
      <div className="advantages__item2 mt-5">
        <div className="row">
          <div className="advantages__intro2 col-md-6">
            <h5>INTEGER PORTTITOR MOLLISAR</h5>
            <h3>Laoreet Eleifend </h3>
            <p>
              Nulla pellentesque mi non laoreet eleifend. Integer porttitor
              mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum
              est. Cras mi ipsum, consectetur ac ipsum in, egestas vestibulum
              tellus
            </p>
          </div>
          <div className="advantages__image2 col-md-6">
            <img src={require("../../images/g1.jpg")} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurAdvantages
