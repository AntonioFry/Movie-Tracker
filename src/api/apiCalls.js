  // const url = 'http://localhost:3000'
import { apiKey } from '../apiKey'

export const fetchMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}edd&language=en-US&page=1`)
      .then(res => res.json())
      .then(res => res.results)
      .catch (error => error.message)   
}

export const getUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }
   
    const response = await fetch('http://localhost:3000/api/users', options)
    const result = await response.json()

    return result.data
  } catch (error) {
    console.log(error.message)
    // throw Error(error.message)
  } 
}

export const favoriteMovie = async (userId, movieInfo) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(userId, ...movieInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(`http://localhost:3000/api/users/favorites/new`, options)
    const result = await response.json()

  } catch (error) {
    console.log(error)
  }
}

export const fetchFavorites = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${userId}/favorites`);
    const result = await response.json();
    return result.data
  } catch (error) {
    throw new Error('Failed to fetch favorites');
  }
}

export const removeFavorite = async (userId, movieId) => {
  try {
    const option = {
      method: 'DELETE',
      body: JSON.stringify(userId, movieId),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(`http://localhost:3000/api/users/${userId}/favorites/${movieId}`, option);
    // const result = await response.json();
  } catch (error) {

  }
}