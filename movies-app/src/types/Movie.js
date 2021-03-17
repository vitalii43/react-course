import PropTypes from 'prop-types';

export const Movie = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
});