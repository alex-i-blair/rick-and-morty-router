import { Route, Switch } from 'react-router-dom';
import CharacterDetails from './views/CharacterDetails';
import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <CharacterDetails />
      </Route>
      <Route path="/">
        <CharacterList />
      </Route>
    </Switch>
  );
}
