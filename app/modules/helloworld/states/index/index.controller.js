export class IndexController {

  constructor() {
    this.helloMessage = 'Hello World!';
  }

  static get $inject() {
    return [];
  }
}

export function indexRoute(stateProvider) {
  stateProvider
    .state('helloworld', {
      url: '/helloworld',
      parent: 'layoutMain',
      templateUrl: 'modules/helloworld/states/index/index.html',
      controller: 'helloworld\\IndexController',
      controllerAs: 'ctrlIndex'
    })
  ;
}

indexRoute.$inject = [
  '$stateProvider'
];
