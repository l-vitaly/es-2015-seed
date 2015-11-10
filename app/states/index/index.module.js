import {IndexController, indexRoute} from './index.controller';

export default angular.module('app.states.index', [])
  .config(indexRoute)
  .controller('IndexController', IndexController)
;
