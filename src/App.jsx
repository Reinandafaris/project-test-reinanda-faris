import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Work from "@/pages/Work"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Careers from "@/pages/Careers"
import Contact from "@/pages/Contact"
import Ideas from "@/pages/Ideas"
import HomeLayout from "@/layouts/HomeLayout"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Ideas />,
        },
        {
          path: "/work",
          element: <Work />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={routes} />
  )
}

export default App
