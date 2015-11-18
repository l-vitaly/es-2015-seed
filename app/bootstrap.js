import appModule from './app';

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name]);
});
