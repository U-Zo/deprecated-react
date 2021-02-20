import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import CounterPage from './components/pages/CounterPage';
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <Route component={HomePage} path="/" exact />
      <Switch>
        <Route component={CounterPage} path="/counter" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
