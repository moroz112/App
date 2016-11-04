import angular from 'angular';

import listsService from '../services/listsService';
import listsCtrl from '../controllers/listsCtrl'

export default angular.module('main', [listsService])
            .controller('listsCtrl', listsCtrl)
            .name;