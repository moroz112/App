export default class listsCtrl {
	constructor(listsFactory) {
		this.lists = listsFactory.getLists();
		this.addList = function(list) {
			listsFactory.addList(list);
			this.listName = ''
		}
	}
}

listsCtrl.$inject = ['listsFactory'];