import axios from 'axios';

import {
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMovieFailure,
  getMovieStart,
  getMovieSuccess,
} from './MovieAction';

export const getMovie = async dispatch => {
  dispatch(getMovieStart());
  try {
    const res = await axios.get('/movie', {
      headers: {
        token:
          ' Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(getMovieSuccess(res.data));
  } catch (err) {
    dispatch(getMovieFailure());
  }
};

// delete

export const deleteMovie = async (id,dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete('/movie/'+id, {
      headers: {
        token:
          ' Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
