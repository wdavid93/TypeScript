// Importation du module React, nécessaire pour créer des composants React.
import React from 'react';

// Importation du module ReactDOM, utilisé pour interagir avec le DOM (Document Object Model).
import ReactDOM from 'react-dom';

// Importation du composant principal de l'application, défini dans le fichier './App'.
import App from './App';

// Utilisation de ReactDOM pour rendre le composant React dans le DOM.
// La méthode `render` prend deux arguments : le composant à rendre et l'élément DOM dans lequel le rendre.
ReactDOM.render(
  // Le composant principal `App` est rendu ici. Il s'agit de la racine de notre application React.
  <App />,
  
  // Sélectionne l'élément du DOM avec l'ID 'root'. C'est ici que notre application React sera insérée.
  document.getElementById('root')
);
