import indexModule from './index/index.module';
import authorsModule from './authors/authors.module';

export default angular.module('app.states', [
  indexModule.name,
  authorsModule.name
]);
