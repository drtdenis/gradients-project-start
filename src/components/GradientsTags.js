const GradientsTags = (props) => {
const {tags} = props

  return (
    <div className="mt-3">
      {
        tags.sort().map((el) => (
        <button type="button" className="btn btn-sm me-2 mb-2 bg-dark text-white">{el}</button>
        ))}
    </div>
  )
}
export default GradientsTags