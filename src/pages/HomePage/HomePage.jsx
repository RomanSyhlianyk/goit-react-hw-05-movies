import { getTrendingMovies } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useFetchData } from 'utils/hooks/useFetchData';

const HomePage = () => {
      const {
        data: movies,
        isError,
        isLoading,
      } = useFetchData(getTrendingMovies);

    if (isError) {
        return <p>Error</p>
    }
  return (
    <section>
      <h1>Trending today</h1>
      {isLoading ? (
        <Loader />
      ) : (
        movies && <MoviesList movies={movies.data.results} />
      )}
    </section>
  );
};

export default HomePage;
