import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CounterPage from './components/pages/CounterPage';
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Route component={HomePage} path="/" exact />
      <Switch>
        <Route component={CounterPage} path="/counter" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
