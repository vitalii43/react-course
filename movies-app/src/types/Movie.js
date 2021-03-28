import PropTypes from 'prop-types';

export const Movie = PropTypes.shape({
  budget: PropTypes.number,
  genres: PropTypes.array,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  revenue: PropTypes.number,
  title: PropTypes.string,
  tagline: PropTypes.string,
  runtime: PropTypes.number,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number
});
