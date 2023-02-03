import { getCast } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams(null);
  const [cast, setCast] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const dataCast = await getCast(movieId);
        setCast(dataCast.data.cast);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  if (isError) return <p>Error</p>;
  if (isLoading) return <Loader />;

  return (
    <div>
      <ul>
        {cast.length > 0 &&
          cast.map(({ name, profile_path, id }) => {
            return (
              <li key={id}>
                {profile_path && (
                  <img
                    width="120"
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt=""
                  />
                )}
                <h3>{name}</h3>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cast;
