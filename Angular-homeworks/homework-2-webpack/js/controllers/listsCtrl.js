export default class listsCtrl {
	constructor(listsService) {
		this.lists = listsService.getLists();
		this.listsService = listsService;
	}
	addList(list) {
		this.listsService.addList(list);
		this.listName = ''
	}
}

listsCtrl.$inject = ['listsService'];