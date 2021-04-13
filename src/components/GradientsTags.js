const GradientsTags = (props) => {
const {tags, filter, setFilter} = props

  return (
    <div className="mt-3">
      {tags.sort().map((el) => (
        <button 
        type="button" 
        className={el === filter ?  "btn btn-sm me-2 mb-2 bg-light" :"btn btn-sm me-2 mb-2 bg-dark text-white" }
        onClick= {() => setFilter(el)} 
        key={el}
        disabled={el === filter}>
          {el}
          </button>
        ))}
    </div>
  )
}
export default GradientsTags