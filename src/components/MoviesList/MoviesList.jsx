import { MovieCard } from 'components/MovieCard/MovieItem';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return <MovieCard key={id} title={title} id={id} />;
      })}
    </ul>
  );
};
