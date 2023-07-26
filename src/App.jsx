import {About, Footer, Hero, Navbar} from "./components"
import { BrowserRouter } from "react-router-dom"
import GetApp from "./components/GetApp"


function App() {
  
  return (
    <BrowserRouter>
      <div className= "bg-primary py-4 h-20">
      <Navbar />
       </div>
       <Hero />
       <GetApp />
      <About />
      <Footer />

    </BrowserRouter>
  )
}

export default App
