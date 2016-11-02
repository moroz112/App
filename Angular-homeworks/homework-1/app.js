var app = angular.module('app', []);

app.controller('mainCtrl', mainCtrl);

function mainCtrl() {
    this.list = [
        {
            id: 1,
            name: "AngularJS",
            time: "Our present is"
        },
        {
            id: 2,
            name: "Backbone",
            time: "Our paste is"
        },
        {
            id: 3,
            name: "ReactJS",
            time: "Our future is"
        }
    ]
}