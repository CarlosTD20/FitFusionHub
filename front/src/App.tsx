import { BrowserRouter } from "react-router-dom"
import RoutingComponent from "./routes/RoutingComponent"
import Footer from "./pages/Layout/Footer"
import Header from "./pages/Layout/Header"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutingComponent />
        <Footer />
      </BrowserRouter>
    </>
  )
}