import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./Pages/Home'));
const NavBar = React.lazy(() => import('./components/NavBar'));
const Support = React.lazy(() => import('./Pages/Support'));
const Blogs = React.lazy(() => import('./Pages/Blogs'));

const App = () => {
  return (
    <div className='bg-customBackground'>
    <Router >
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <NavBar />
      </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/support" element={<Support />} />
              <Route path="/blogs" element={<Blogs/>} />
            </Routes>
        </Suspense>
    </Router>
    </div>
  );
}

export default App;
