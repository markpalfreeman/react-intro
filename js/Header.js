import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

class Header extends React.Component {
  constructor (props) {
    super(props) // call parent's constructor with (props)

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }

  render () {
    let utility
    if (this.props.showSearch) {
      utility = (
        <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
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
  dispatch: func, // prop comes from 'connect'
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
