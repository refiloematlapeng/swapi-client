import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

const DetailsPage = lazy(() => import('./pages/Details'));
const HomePage = lazy(() => import('./pages/Home'));

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Router>
        <Navbar />

        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route exact path="/details/:name" component={DetailsPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
