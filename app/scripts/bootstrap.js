import appModulePromise from './app';

angular.element(document).ready(function() {
  appModulePromise.then(function(appModule) {
    angular.bootstrap(document, [appModule.name]);
  });
});
