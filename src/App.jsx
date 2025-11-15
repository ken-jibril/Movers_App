import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage.jsx"
import Header from "./components/header.jsx"


function App() {
  

  return (
    <>
      {/* Header stays on top of all pages */}
      <Header />

      {/* Only the main content changes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
