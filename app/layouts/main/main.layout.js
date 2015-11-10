function layoutMain(stateProvider) {
  stateProvider
    .state('layoutMain', {
      abstract: true,
      templateUrl: 'layouts/main/main.html'
    })
  ;
}

layoutMain.$inject = [
  '$stateProvider'
];

export default angular.module('app.layouts.main', [])
  .config(layoutMain)
;
