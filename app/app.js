import {vendors} from './vendors';
import coreModule from './core/core.module';
import statesModule from './states/states.module';
import layoutsModule from  './layouts/layouts.module';
import modulesModule from  './modules/modules.module';
import templatesModule from './templates';

let moduleNames = [
  templatesModule.name,
  coreModule.name,
  statesModule.name,
  layoutsModule.name,
  modulesModule.name
];

export default angular.module('app', vendors.concat(moduleNames));
