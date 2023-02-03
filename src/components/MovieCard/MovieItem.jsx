import { Link, useLocation,  } from 'react-router-dom';
import PropTypes from 'prop-types';
export const MovieCard = ({ title, id }) => {
    const location = useLocation()
    
  return (
    <li>
      <Link state={{from:location}} to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  id:PropTypes.number.isRequired
};