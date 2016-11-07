import angular from 'angular';

import routing from './config.routing';

import uirouter from 'angular-ui-router';

import lists from './lists';

angular.module('app', [uirouter,lists]).config(routing);