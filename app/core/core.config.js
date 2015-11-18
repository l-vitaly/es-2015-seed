export function coreConfig(httpProvider, locationProvider) {
  httpProvider.defaults.headers.delete = {'Content-Type': 'application/json'};

  locationProvider.html5Mode({
    'enabled': true,
    'requireBase': true,
    'rewriteLinks': true
  }).hashPrefix('!');
}

coreConfig.$inject = [
  '$httpProvider', '$locationProvider'
];
