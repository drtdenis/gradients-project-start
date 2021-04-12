import {uniqueTags} from "../gradients"

const GradientsSelect = () => {
  console.log(uniqueTags)
  return (
    <div className = "imput-group mb-3">
      <label className = "imput-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select id ="select" className="form-select">
        <opton value="all">tous</opton>
        {uniqueTags.map((el) =>(
          <option value={el}>{el}</option>
        )
        )}
      </select>
    </div>
  )

}
export default GradientsSelect