import {vendors} from './vendors';
import coreModule from './core/core.module';
import statesModule from './states/states.module';
import layoutsModule from  './layouts/layouts.module';
import modulesModule from  './modules/modules.module';

let appModulePromise = new Promise(function(resolve) {
  angular.module('app', vendors.concat([
    coreModule.name,
    statesModule.name,
    layoutsModule.name,
    modulesModule.name
  ]));

  resolve(angular.module('app'));
});

export default appModulePromise;
