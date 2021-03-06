import { shallow } from 'enzyme';
import React from 'react';
import MovieContainer from './MovieContainer';

describe('MovieContainer', () => {
  let wrapper;
  const mockMovies = [
    {
      vote_count:411,
      id:420818,
      video:false,
      vote_average:7,
      title:"The Lion King",
      popularity:585.503,
      poster_path:"/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
      original_language:"en",
      original_title:"The Lion King",
      backdrop_path:"/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
      adult:false,
      overview:"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      release_date:"2019-07-12"}
  ]
  beforeEach(()=> {
    wrapper = shallow(
      <MovieContainer movies={mockMovies}/> 
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  }); 
}); 

