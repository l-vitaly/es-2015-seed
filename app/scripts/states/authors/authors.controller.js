export class AuthorsController {

  constructor() {
    this.authors = [
      {
        name: 'Vitaly Lobchuk',
        work: 'Backend&Frontend Developer',
        email: 'vn.lobchuk@gmail.com'
      }
    ];
  }

  static get $inject() {
    return [];
  }
}

export function authorsRoute(stateProvider) {
  stateProvider
    .state('authors', {
      url: '/authors',
      templateUrl: 'scripts/states/authors/authors.html',
      controller: 'AuthorsController',
      controllerAs: 'ctrlAuthors'
    })
  ;
}

authorsRoute.$inject = [
  '$stateProvider'
];
