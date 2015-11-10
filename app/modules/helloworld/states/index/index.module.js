import {IndexController, indexRoute} from './index.controller';

export default angular.module('app.modules.helloworld.states.index', [])
  .config(indexRoute)
  .controller('helloworld\\IndexController', IndexController)
;
