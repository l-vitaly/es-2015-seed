export function coreConfig(httpProvider, locationProvider) {
  httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        if (/.(html+)$/gi.test(config.url)) {
          config.url = 'dist/' + config.url;
        }
        return config;
      }
    };
  });

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
