import './index.css'

const DestinationItem = props => {
  const {destinationInfo} = props
  const {imgUrl, name} = destinationInfo
  return (
    <li className="list-container">
      <img className="dest-img" src={imgUrl} alt={name} />
      <p className="dest-name">{name}</p>
    </li>
  )
}

export default DestinationItem
