import React from "react"
import Carousel from "./Carousel"
import WhatWeDo from "./WhatWeDo"
import FeelFree from "./FeelFree"
import OurAdvantages from "./OurAdvantages"
import RecentFeedBack from "./RecentFeedBack"
import Achievement from "./Achievement"
import CourseList from "./CourseList"

const HomeScreen = () => {
  return (
    <div>
      <Carousel />
      <CourseList />
      <WhatWeDo />
      <FeelFree />
      <OurAdvantages />
      <RecentFeedBack />
      <Achievement />
    </div>
  )
}

export default HomeScreen
