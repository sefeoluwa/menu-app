import { About, Footer, Hero, Navbar } from "./components"
import { BrowserRouter } from "react-router-dom"



function App() {
  
  return (
    <BrowserRouter>
      <div className= "bg-primary py-4 h-20 dark:bg-primary">
        <Navbar />
      </div>
     <div className="bg-primary dark:bg-primary">
        <Hero />
        <About />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
