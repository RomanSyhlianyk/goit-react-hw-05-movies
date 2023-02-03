import { getReviews } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams(null);
  const [reviews, setCast] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const dataReviews = await getReviews(movieId);
        setCast(dataReviews.data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (isError) return <p>Error</p>;
  if (isLoading) return <Loader />;

  return (
    <div>
      <ul>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Reviews;
