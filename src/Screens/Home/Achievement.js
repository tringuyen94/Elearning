import React from "react"
import "../../Sass/Achievement.scss"
import CountUp from "react-countup"

const Achievement = () => {
  return (
    <div className="achievement container">
      <h2>
        our
        <span> achievement</span>
      </h2>
      <div className="row mt-5">
        <div className="col-md-3">
          <CountUp
            className="count__number"
            start={0}
            end={2001}
            duration={1000}
          />
          <p>Year of Foundation</p>
        </div>
        <div className="col-md-3">
          <CountUp
            className="count__number"
            start={0}
            end={765}
            duration={1000}
          />
          <p>Graduates</p>
        </div>
        <div className="col-md-3">
          <CountUp
            className="count__number"
            start={0}
            end={125}
            duration={1000}
          />
          <p>Certified Staff</p>
        </div>
        <div className="col-md-3">
          <CountUp
            className="count__number"
            start={0}
            end={150}
            duration={1000}
          />
          <p>Student</p>
        </div>
      </div>
    </div>
  )
}

export default Achievement
