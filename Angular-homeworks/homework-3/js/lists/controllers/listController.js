export default class listController{
    constructor(listsService) {
        console.log("ctrl works");
        this.listsService = listsService;
        this.lists = listsService.getLists();
        this.toUpdateElement = listsService.getToUpdateElement();
        this.notificationUpdateMessage = ""
    }
    updateListElement(listName) {
        this.listsService.updateListElement(listName)
        this.notificationUpdateMessage = 'List item successfully updated';
    }
}
listController.$inject = ['listsService'];
