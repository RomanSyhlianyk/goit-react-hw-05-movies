import { getMovieById } from 'api/api';
import { useState, useEffect, Suspense } from 'react';
import { routes } from '../../routes/routes';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useRef } from 'react';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { state } = useLocation();
  const { movieId } = useParams(null);
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const backPath = state?.from ? state.from.pathname : '/';
  const ref = useRef(backPath);

  useEffect(() => {
    const fetchMoviesById = async () => {
      try {
        setIsLoading(true);
        const dataMovie = await getMovieById(movieId);
        setMovie(dataMovie.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesById();
  }, [movieId]);

  if (isError) return <p>Error</p>;
  if (isLoading) return <Loader />;
  return (
    <section>
      <Link to={ref?.current}>Back</Link>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          width="300"
        />
      )}
      <div>
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {movie?.genres && (
          <ul>
            {movie.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        )}
        <ul>
          <li>
            <Link to={routes.CAST}>Cast</Link>
          </li>
          <li>
            <Link to={routes.REVIEWS}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
