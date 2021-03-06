import angular from 'angular';

import routing from './listsRoute';

import listsService from './services/listsService';

import listsController from './controllers/listsController';

import listController from './controllers/listController';

export default angular.module('app.lists', [listsService]).config(routing).controller('listsController', listsController)
    .controller('listController', listController).name;
