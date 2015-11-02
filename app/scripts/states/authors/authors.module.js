import {AuthorsController, authorsRoute} from './authors.controller';

export default angular.module('app.states.authors', [])
  .config(authorsRoute)
  .controller('AuthorsController', AuthorsController)
;
