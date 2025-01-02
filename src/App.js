import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import SuperHeroPage from './components/SuperHero.page';
import ReactQuerySuperHeroPage from './components/ReactQuerySuperHero.page';
import HomePage from './components/Home.page';

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      x    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroPage />} />
          <Route path="/rq-super-heroes" element={<ReactQuerySuperHeroPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>

    </QueryClientProvider>

  );
}

export default App;
