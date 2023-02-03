import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../routes/routes';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  const { HOME_PAGE, MOVIES, MOVIE_DETAILS, CAST, REVIEWS } = routes;
  return (
    <Routes>
      <Route path={HOME_PAGE} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={MOVIES} element={<Movies />} />
        <Route path={MOVIE_DETAILS} element={<MovieDetails />}>
          <Route path={CAST} element={<Cast />} />
          <Route path={REVIEWS} element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME_PAGE} />} />
      </Route>
    </Routes>
  );
};
