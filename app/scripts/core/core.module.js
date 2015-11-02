import angular from 'angular';
import {coreConfig} from './core.config';
import {coreRun} from './core.run';

export default angular.module('app.core', [])
  .run(coreRun)
  .config(coreConfig)
;
