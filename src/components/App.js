import { Route, Routes } from 'react-router-dom';

// components
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home.jsx'
import Catalog from '../pages/catalog/Catalog';
import Favorite from '../pages/favorite/Favorite';
import NotFound from '../pages/notFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
