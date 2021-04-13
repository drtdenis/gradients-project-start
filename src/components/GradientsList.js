import Gradient from "./Gradient"

const GradientsList = (props) => {

let {filter, gradients} = props
  
if (filter !=="all") {
  gradients = gradients.filter(el=>el.tags.includes(filter))
  }

  return (
    <ul className="row list-unstyled">
        {gradients.map((el) => (
           
        <Gradient colorStart ={el.start} 
        colorEnd={el.end} 
        name={el.name} 
        tags={el.tags}
        />
          
        ))}
    </ul>
  )
}

export default GradientsList
