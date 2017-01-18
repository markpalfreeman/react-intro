import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      descripion: string
    }))
  },

  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  handleSearchTermChange (event) {
    this.setState({
      searchTerm: event.target.value
    })
  },

  render () {
    return (
      <div className='search'>
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(show => {
              // is the search term found in either the title or description?
              return `${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0
            })
            .map(show => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            }
          )}
        </div>
      </div>
    )
  }
})

export default Search
