import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from "react-particles-js"
import NavBar from "./components/navBar"
import Header from "./components/header"
import stroke from "tsparticles/Options/Classes/Particles/Stroke"

function App() {
  return (
    <>
      <Particles
        // className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <NavBar />
      <Header />
    </>
  )
}

export default App
