import { BrowserRouter } from "react-router-dom"
import RoutingComponent from "./routes/RoutingComponent"
import Footer from "./pages/Layout/Footer"

export default function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <RoutingComponent />
        <Footer />
      </BrowserRouter>
    </>
  )
}