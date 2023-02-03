import { MovieCard } from 'components/MovieCard/MovieItem';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return <MovieCard key={id} title={title} id={id} />;
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
