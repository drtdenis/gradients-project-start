import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"


const GradientsApp = () =>{
return(
  <>
  <h1 className="text-center my-4">Alyra Gradients</h1>
      <main className="container">
        <GradientsSelect />
        <GradientsList />
      </main>
      </>
)
}
export default GradientsApp