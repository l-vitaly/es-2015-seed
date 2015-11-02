export function coreRun(rootScope, buildDir) {
  rootScope.buildDir = buildDir;
}

coreRun.$inject = [
  '$rootScope', 'buildDir'
];
