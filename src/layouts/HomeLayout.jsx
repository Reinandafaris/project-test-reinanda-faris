import { Outlet } from "react-router-dom";
import Header from "@/components/Header"
import Footer from "@/components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout