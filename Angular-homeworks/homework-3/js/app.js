import angular from 'angular';

import routing from './config.routing';

import lists from './lists';

angular.module('app', [lists]).config(routing);