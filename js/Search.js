import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
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
        <header>
          <h1>mvidz</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
        </header>
        <div>
          {preload.shows
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
