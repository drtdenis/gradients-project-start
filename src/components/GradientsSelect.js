import {uniqueTags} from "../gradients"

const GradientsSelect = (props) => {
  const {setFilter, filter} = props
  const handelSelectChange = (event) => {
  setFilter(event.target.value)
  }
  
  return (
    <div className = "input-group mb-3">
      <label className = "input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select id ="select" className="form-select"
        onChange={handelSelectChange} value={filter}>
        <option value="all">tous</option>
        {uniqueTags.map((el) =>(
          <option value={el}>{el}</option>
        )
        )}
      </select>
    </div>
  )

}
export default GradientsSelect