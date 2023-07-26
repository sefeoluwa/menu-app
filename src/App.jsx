import {About, Footer, Hero, Navbar} from "./components"
import { BrowserRouter } from "react-router-dom"


function App() {
  
  return (
    <BrowserRouter>
      <div className= "bg-primary py-4 h-20">
      <Navbar />
       </div>
       <Hero />
      <About />
      <Footer />

    </BrowserRouter>
  )
}

export default App
