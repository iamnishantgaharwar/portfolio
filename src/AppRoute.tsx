import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import { lazy } from "react"
const Blogs = lazy(() => import('./pages/Blogs'));

const AppRoute = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
    </Router>
  )
}

export default AppRoute