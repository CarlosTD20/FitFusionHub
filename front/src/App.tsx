import { BrowserRouter } from "react-router-dom"
import Header from "./pages/Layout/Header"
import RoutingComponent from "./pages/UIComponents/RoutingComponent"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutingComponent />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}