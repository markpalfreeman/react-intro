import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Details from './Details'
import Search from './Search'
import preload from '../public/data'

import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter >
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match
            pattern='/search'
            component={(props) => <Search shows={preload.shows} {...props} />}
          />
          <Match
            pattern='/details/:id'
            component={(props) => {
              const shows = preload.shows.filter(show => show.imdbID === props.params.id)
              return <Details show={shows[0]} {...props} />
            }}
          />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
