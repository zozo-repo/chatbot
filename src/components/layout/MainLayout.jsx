import Navbar from "../common/Navbar"
import Footer from "../common/Footer"

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
