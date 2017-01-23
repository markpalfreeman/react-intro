import React from 'react'
import { Provider } from 'react-redux'
import Search, { UnwrappedSearch } from './Search' // add "unwrapped" as base React component with Redux connection
import { shallow, render } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import store from './store'
import { setSearchTerm } from './actionCreators'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

test('Search snapshot test', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  const tree = shallowToJson(component)

  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)

  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

// With Redux, we need to mimic the dispatch action and test its outcome
test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  store.dispatch(setSearchTerm(searchWord))

  const component = render(<Provider store={store}><Search shows={preload.shows} /></Provider>)
  const showCount = preload.shows.filter(show => {
    // is the search term found in either the title or description?
    return `${show.title} ${show.description}`.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0
  }).length

  expect(component.find('.show-card').length).toEqual(showCount)
})
