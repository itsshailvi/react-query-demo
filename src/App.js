import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import SuperHeroPage from './components/SuperHero.page';
import ReactQuerySuperHeroPage from './components/ReactQuerySuperHero.page';
import HomePage from './components/Home.page';
import RQSuperHero from './components/RQSuperHero';
import ParallelQueries from './components/ParallelQueries.page';
import { DynamicParallel } from './components/DynamicParallel.page';

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
          <Route path="/rq-dynamic-parallel" element={<DynamicParallel heroIds={[1, 3]} />} />
          <Route path="/rq-dynamic-parallel" element={<DynamicParallel heroIds={[1, 3]} />} />
          <Route path="/rq-parallel" element={<ParallelQueries />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
          <Route path="/super-heroes" element={<SuperHeroPage />} />
          <Route path="/rq-super-heroes" element={<ReactQuerySuperHeroPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools intialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>

  );
}

export default App;
