// Write your code here.
import './index.css'

const BannerItems = props => {
  const {item} = props
  const {headerText, description, className} = item

  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerItems
