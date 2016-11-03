import angular from 'angular';
import listsFactory from './factories/listsFactory';
import listsCtrl from './controllers/listsCtrl';

angular.module('app', []);
angular.module("app").controller("listsCtrl", listsCtrl);
angular.module("app").factory("listsFactory", listsFactory);
