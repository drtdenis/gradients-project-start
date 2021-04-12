import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientPill from "./GradientPill"
import GradientsTags from "./GradientsTags"


const Gradient = ({ colorStart, colorEnd, name, tags }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientsTags tags={tags} />
      </div>
    </li>
  )
}

export default Gradient
