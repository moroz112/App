/**
 * Created by amoroz on 23.10.16.
 */
var app = angular.module("app", []);
//1,2,3
app.factory("myFactory", function() {
    return {
        hello: "yo world",
        helloFunction: function() {
            return "I'm text from factory function"
        }
    }
});
app.controller("myCtrl1", function(myFactory) {
    this.myFactory = myFactory;
    this.hello = "hello";

    this.setHello = function() {
        this.hello = "Changed hello from function"
    };
    this.setHelloByUser = function(newHello) {
        this.hello = newHello
    }
});
//Factory example

app.controller("myCtrl2", function(myFactory) {
    this.myFactory = myFactory
});
app.controller("myCtrl3", function(myFactory) {
    this.myFactory = myFactory;
});
//Directive example with templates and other shit
app.directive("myDirective", function() {
   return {
       link: function(scope, element, attrs) {
           console.log("scope", scope);
           console.log("element", element);
           console.log("attrs", attrs);
           element.on("click", function() {
                console.log("you click me");
            })
       }
   }
});
app.controller("directiveCtrl", function($scope) {
    $scope.mainVar = "var from scope of directiveCtrl"
});
app.directive("loopDirective", function() {
   var passengers = [
       {
           paxType: "adult",
           id: 11
       },
       {
           paxType: "child",
           id: 22
       },
       {
           paxType: "infant",
           id: 33
       }
   ];
    return {
        restrict: "E",
        transclude: true,
        template: "<div ng-repeat='passenger in passengers'>{{passenger.paxType}}</div><ng-transclude></ng-transclude>",
        link: function(scope, element, attrs, ctrl, transclude) {
            scope.passengers = passengers;

            //first scope is directive's scope, clone is element that exist in directive
            // second scope is scope of element that exist in directive in template
            transclude(scope, function(clone, scope) {
               element.append(clone);
            });
        }
    }
});
//When our html template is too large for 'template' option of directive
app.directive("templateurlDirective", function() {
   return {
       restrict: "E",
       templateUrl: "templates/directive.html",
       link: function(scope, element, attrs) {

       }
   }
});


//4

