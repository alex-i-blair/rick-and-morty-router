import { Route, Switch } from 'react-router-dom';
import CharacterList from './views/CharacterList';
import Home from './views/Home';

export default function App() {
  return (
    <Switch>
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
