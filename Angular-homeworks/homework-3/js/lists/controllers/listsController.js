export default class listsController{
    constructor(listsService) {
        this.listsService = listsService;
        this.lists = listsService.getLists();
        this.notificationMessage = ""
    }
    getLists() {
        this.listsService.getLists();
    }
    createList(listName) {
        this.listsService.createList(listName);
        this.listName = '';
        this.notificationMessage = "New list successfully created"
    }
    goToUpdate(list) {
        this.listsService.goToUpdate(list);
    }
}

listsController.$inject = ['listsService'];