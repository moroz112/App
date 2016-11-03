angular.module('app').controller('listCtrl', listCtrl);

listCtrl.$inject = ['listsFactory'];
function listCtrl(listsFactory) {
    console.log('listCtrl');
    this.removeList = function(list) {
        listsFactory.removeList(list);
    }
}