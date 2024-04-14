// Write your code here.
import './index.css'
const TechnologyCards = props => {
  const {cardsDetails} = props
  const {title, description, imgUrl, className} = cardsDetails
  return (
    <li className={`${className} list-item`}>
      <h1 className="heading">{title}</h1>
      <p className="description-line">{description}</p>
      <div className="image-styling">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default TechnologyCards
