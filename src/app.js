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
           element.on("click", function() {
                console.log("you click me");
            })
       }
   }
});
//Using template in directive, using trunsclude to not loose
//data from html in current directive
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
// Example of using templateCache
app.run(function($templateCache) {
    $templateCache.put("someTemplate.html", "<div>This is some template</div>")
});
app.directive("cacheDirective", function($templateCache) {
   return {
       restrict: "E",
       templateUrl: "someTemplate.html",
       link: function(scope, element, attrs) {
           console.log($templateCache.info());
       }
   }
});
//Communication between directive and controller
//If directive initialized init controller then directive can change
//scope of controller. It is dangerous.
app.controller("directiveCtrl", function($scope) {
    $scope.hello = "Hello";
});
app.directive("directivectrlCommunication", function () {
    return {
        scope: false,
        restrict: "E",
        link: function(scope, element, attrs) {
            scope.hello = "Hi";
        }
    }
});
//Scope: true in directives. Directive has access to methods and
// properties of controller(prototype inheritance), but can't
// change it because scope(directive) = new scope(controller)
app.controller("scopeTrue", function($scope) {
    console.log("scope of controller", $scope);
    $scope.name = "Harry";
});
app.directive("scopeTrue", function() {
   return {
       scope: true,
       restrict: "E",
       template: "<div>name from directive {{name}}</div><input ng-model='name'>",
       link: function(scope, element, attrs) {
           console.log("scope of directive", scope);
       }
   }
});
//Isolation scope in directives. If we define scope of directive as object
//it means that directive has isolation scope. Isolation scope hasn't
//prototype inheritance from controller
//Variables from controller pass into directive's attributes with the same names as
//variables of controller
//We can get variable from controller for readOnly with '@' using
//We can get variable from controller with two way binding with '=' using
//We can call method from controller with '&' using
app.controller("isolationScope", function($scope) {
    $scope.name = "Harry";
    $scope.color = "#333333";
    $scope.reverse = function() {
        $scope.name = $scope.name.split('').reverse().join('');
    }
});
app.directive("isolationScope", function() {
   return {
       scope: {
            name: "@",
           color: "=",
           reverse: "&"
       },
       restrict: "E",
       template: "this is name from directive {{name}} Color from directive {{color}}" +
       "<input ng-model='name'>" +
       "<input ng-model='color'>" +
       "<button ng-click='reverse()'>Called controller's method from directive to reverse</button>",
       link: function(scope, element, attrs) {

       }
   }
});
//Transclude element in directive
//Template from tag script with 'text/ng-template' automatic put in
//$templateCache. When value of transclude is 'element' then value of
//'clone' argument in transclude is all element not just content like
//with transclude: true
//$templateCache decide by 'id' what template use
//This feature is useful when we need to paste directive in some another
//element or add something before directive
app.directive("wrapIn", function($templateCache) {
    return {
        transclude: "element",
        link: function(scope, element, attrs, ctrl, transclude) {
            var template = $templateCache.get(attrs.wrapIn);
            var templateElement = angular.element(template);

            transclude(scope, function(clone) {
                console.log("element", element);
                element.after(templateElement.append(clone));
            })
        }
    }
});
