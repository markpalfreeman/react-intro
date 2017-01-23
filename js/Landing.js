import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { func, object, string } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },

  propTypes: {
    dispatch: func,
    searchTerm: string
  },

  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  },

  handleSearchTermChange (event) {
    var term = event.target.value || ''
    // 'dispatch' comes as a prop from the react-redux 'connect'
    this.props.dispatch(setSearchTerm(term))
  },

  render () {
    return (
      <div className='landing'>
        <h1>mvidz</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
        </form>
        <Link to='/search' onClick={this.handleSearchTermChange}>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

// Use connect method to get state from Redux and pass to Landing as props
export default connect(mapStateToProps)(Landing)
