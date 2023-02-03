import { getMovieByName, getSearchMovie } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/searchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams] = useSearchParams('');
  const query = searchParams.get('search');
  const [movies, setMovies] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const dataMovie = await getMovieByName(query);
        setMovies(dataMovie.data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchMovies();
  }, [query]);

  if (isError) return <p>Error</p>;

  return (
    <section>
      <SearchForm />
      {isLoading ? <Loader /> : movies && <MoviesList movies={movies} />}
    </section>
  );
};

export default Movies;
