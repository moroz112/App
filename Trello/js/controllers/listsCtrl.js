angular.module('app').controller('listsCtrl', listsCtrl);

listsCtrl.$inject = ['listsFactory'];

function listsCtrl(listsFactory) {
    this.lists = listsFactory.getLists();
    this.addList = function () {
        listsFactory.addList(this.listName);
        this.listName = '';
    }
}
