import {About, Footer, Hero, Navbar, GetApp} from "./components"
import { BrowserRouter } from "react-router-dom"



function App() {
  
  return (
    <BrowserRouter>
      <div className= "bg-primary py-4 h-20">
        <Navbar />
      </div>
     <div className="bg-primary">
        <Hero />
        <GetApp />
        <About />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
