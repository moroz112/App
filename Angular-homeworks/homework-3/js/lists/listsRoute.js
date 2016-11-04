routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider.state('lists', {
        url: '/',
        template: require('./templates/lists.html'),
        controller: 'listsController',
        controllerAs: 'listsController'
    })
        .state('createList', {
            url: '/createList',
            template: require('./templates/createList.html'),
            controller: 'listsController',
            controllerAs: 'listsController'
        })
        .state('updateList', {
            url: '/updateList',
            template: require('./templates/updateList.html'),
            controller: 'listController',
            controllerAs: 'listController'
        })
}