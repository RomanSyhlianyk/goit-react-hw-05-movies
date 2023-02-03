import { NavLink } from 'react-router-dom';
import { routes } from 'routes/routes';
import clsx from 'clsx';
import css from './Header.module.css'

export const Header = () => {
  return (
    <header className={css.Header}>
      <ul className={css.List}>
        <li className={css.Item}>
          <NavLink
            className={({ isActive }) => {
              return clsx(css.Link, isActive && css.ActiveLink);
            }}
            to={routes.HOME_PAGE}
          >
            Home
          </NavLink>
        </li>
        <li className={css.Item}>
          <NavLink
            className={({ isActive }) => {
              return clsx(css.Link, isActive && css.ActiveLink);
            }}
            to={routes.MOVIES}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
