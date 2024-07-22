import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/character/:id" component={CharacterForm} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
