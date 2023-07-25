import {About, Footer, Hero, Navbar} from "./components"
import { BrowserRouter } from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
      <div className="relative ">
      <Navbar />
      <Hero />
      <About />
      </div>
      <Footer />

    </BrowserRouter>
  )
}

export default App
