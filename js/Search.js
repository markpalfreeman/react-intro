import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      descripion: string
    })),
    searchTerm: string
  },

  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter(show => {
              // is the search term found in either the title or description?
              return `${show.title} ${show.description}`.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0
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

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
