import HeroSection from "../home/HeroSection"
import EngineeringSection from "../courses/EngineeringSection"
import StatisticsSection from "../home/StatisticsSection"
import FeaturedCourses from "../home/FeaturedCourses"
import Footer from "../common/Footer"

const HomePage = () => {
  return (
    <>
      <HeroSection />
	  <div  style={{ backgroundImage: "url('https://media.istockphoto.com/id/1300179502/video/3d-fluid-creative-animated-background-glassmorphism-style-new-trend-2021.jpg?s=640x640&k=20&c=-azjjmTaL61QoiU35X5spc6F2llkLgZM9K7_u3hj70o=')", backgroundSize: 'cover',}}>
      <StatisticsSection />
      <EngineeringSection />
	  </div>
      <FeaturedCourses />
	  <Footer/>
    </>
  )
}

export default HomePage
