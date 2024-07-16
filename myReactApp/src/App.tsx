// Importation des modules nécessaires de React et react-router-dom
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Importation des composants de différentes pages
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

// Définition du composant principal App en tant que FunctionComponent
const App: FunctionComponent = () => {
  return (
    // Utilisation de Router pour définir les routes de l'application
    <Router>
      <div>
        {/* Barre de navigation avec un lien vers la page d'accueil */}
        <nav> 
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Pokédex</Link>
          </div> 
        </nav>
        {/* Définition des différentes routes de l'application */}
        <Switch>
          {/* Route privée pour la liste des Pokémons */}
          <PrivateRoute exact path="/" component={PokemonsList} />
          {/* Route pour la page de login */}
          <Route exact path="/login" component={Login} />
          {/* Route privée pour la liste des Pokémons */}
          <PrivateRoute exact path="/pokemons" component={PokemonsList} />
          {/* Route privée pour ajouter un Pokémon */}
          <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
          {/* Route privée pour éditer un Pokémon */}
          <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
          {/* Route privée pour les détails d'un Pokémon */}
          <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
          {/* Route pour la page non trouvée */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

// Exportation du composant App pour utilisation dans d'autres fichiers
export default App;
