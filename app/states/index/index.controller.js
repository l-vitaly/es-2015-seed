export class IndexController {

  constructor() {
    this.helloMessage = 'Hello! I am ECMA-2015 Skeleton!';
  }

  static get $inject() {
    return [];
  }
}

export function indexRoute(stateProvider) {
  stateProvider
    .state('index', {
      url: '/',
      parent: 'layoutMain',
      templateUrl: 'states/index/index.html',
      controller: 'IndexController',
      controllerAs: 'ctrlIndex'
    })
  ;
}

indexRoute.$inject = [
  '$stateProvider'
];
