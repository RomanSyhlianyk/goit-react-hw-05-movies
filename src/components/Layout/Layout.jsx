import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import css from './Layout.module.css'

 const Layout = () => {
  
  return (
    <div className={css.Layout}>
      <Header />
      <main className={css.Main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
