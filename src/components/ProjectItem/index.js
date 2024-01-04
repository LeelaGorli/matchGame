import './index.css'

const ProjectItem = props => {
  const {projectDetails, getScore} = props
  const {imageUrl, thumbnailUrl} = projectDetails

  const togetScore = () => {
    getScore(imageUrl)
  }

  return (
    <li className="thumbnail-container">
      <button onClick={togetScore} type="button" className="button">
        <img src={thumbnailUrl} alt="thumbnail" className="small-image" />
      </button>
    </li>
  )
}

export default ProjectItem
