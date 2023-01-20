import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            placeholder="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="input"
          />
          <img
            className="search-img"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="locations-container">
          {searchResult.map(eachLocation => (
            <DestinationItem
              key={eachLocation.id}
              destinationInfo={eachLocation}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
