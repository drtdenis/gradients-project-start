import GradientsApp from "./components/GradientsApp"
import GradientsHeader from "./components/GradientsHeader"

function App() {
  return (
    <div>
        <GradientsHeader>
    <h1 className="display-1">Alyra Gradients</h1>
    <p className="tagline">Ultime collection de plus beaux dégradés</p>
  </GradientsHeader>
        <GradientsApp />
    </div>
  )
}

export default App
