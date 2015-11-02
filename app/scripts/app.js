import './vendor';
import coreModule from './core/core.module';
import statesModule from './states/states.module';

let appModulePromise = new Promise(function(resolve) {
  let isBundle = document.body.dataset.isBundled === 'true' || document.body.dataset.isBundled === '1';

  let appSettingsModule = angular.module('app.settings', [])
    .constant('buildDir', document.body.dataset.buildDir)
    .constant('cacheBust', document.body.dataset.cacheBust)
    .constant('isBundled', isBundle);

  let modules = [
    'ui.router',
    'ngMessages',
    'ngSanitize',
    'ngCookies',
    'ngAnimate',
    'ngAria',
    'ngMaterial',

    appSettingsModule.name,
    coreModule.name,
    statesModule.name
  ];

  resolve(angular.module('app', modules));
});

export default appModulePromise;
