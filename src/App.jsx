import { Route, Routes } from "react-router-dom"
import Header from "./components/header.jsx"
import HomePage from "./Pages/HomePage.jsx"
import AboutPage from "./Pages/AboutPage.jsx"


function App() {
  

  return (
    <>
      {/* Header stays on top of all pages */}
      <Header />

      {/* Only the main content changes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
