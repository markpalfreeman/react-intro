import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    let utility
    if (this.props.showSearch) {
      utility = (
        <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
      )
    } else {
      utility = (
        <h2>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }

    return (
      <header>
        <h1>
          <Link to='/'>mvidz</Link>
        </h1>
        {utility}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
