var app = angular.module('app', ['ngRoute']);

app.run(function($rootScope) {
    $rootScope.$on("$routeChangeStart", function(event, current, previous,reject) {
        console.log("changeStart", arguments);
    });
    $rootScope.$on("$routeChangeStart", function(event, current, previous, reject) {
        console.log("changeSuccess", arguments);
        $rootScope.currentPath = current.$$route.originalPath;
    })

});
app.config(function ($routeProvider) {
   $routeProvider
       .when('/', {
            templateUrl: "templates/home.html",
            controller: 'homeController'
        })
       .when('/booking', {
            templateUrl: "templates/booking.html",
            controller: "bookingController"
       })
       .when('/posts', {
           templateUrl: "templates/posts.html",
           controller: "postsCtrl"
       })
       .when('/posts/:postId', {
           templateUrl: "templates/post.html",
           controller: "postCtrl"
       })
});

app.controller('homeController', homeController);
app.controller('bookingController', bookingController);
app.controller('postsCtrl', postsCtrl);
app.controller('postCtrl', postCtrl);
app.controller('pathCtrl', pathCtrl);


homeController.$inject = ['$scope', '$http'];
bookingController.$inject = ['$scope', '$http'];
postsCtrl.$inject = ['$scope', 'postsFactory'];
postCtrl.$inject = ['$scope', '$routeParams', 'postsFactory'];

function pathCtrl() {

}
function homeController($scope, $http) {
    $scope.message = "This is message from homeController"
}
function bookingController($scope, $http) {
    $scope.message = "This is message from bookingController"
}
function postsCtrl($scope, postsFactory) {
    $scope.posts = postsFactory;
}
//with $routeParams we can get access to dynamical parameters
function postCtrl($scope, $routeParams, postsFactory) {
    var postId = Number($routeParams.postId);
    $scope.post = _.findWhere(postsFactory, {id: postId});
}

app.factory('postsFactory', function() {
    return [
        {
            id: 1,
            name: "Why AngularJS is good",
            content: "AngularJS is good because it is destiny"
        },
        {
            id: 2,
            name: "I love AngularJS",
            content: "I love Angular because it is the framework ever"
        },
        {
            id: 3,
            name: "Is AngularJS easy to learn",
            content: "AngularJS is very easy to learn"
        }
    ]
});

