angular.module("app").controller("listsCtrl", listsCtrl);

listsCtrl.$inject = ['listsFactory'];

function listsCtrl (listsFactory) {
	this.lists = listsFactory.getLists();

	this.addList = function(list) {
		listsFactory.addList(list);
		this.listName = '';
	};

}