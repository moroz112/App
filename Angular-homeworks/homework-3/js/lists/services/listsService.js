import angular from 'angular';

class listsService {
    constructor() {
        this.nameForUpdate = '';
        this.updatingElement = '';
        this.lists = [
            {
                name: "Angular"
            },
            {
                name: "Backbone"
            },
            {
                name: "React"
            }
        ]
    }
    getLists() {
        return this.lists;
    }
    createList(listName) {
        this.lists.push({
            name: listName
        })
    }
    getToUpdateElement() {
        this.updatingElement = this.nameForUpdate;
        return this.updatingElement;
    }
    goToUpdate(list) {
        this.nameForUpdate = list.name;
    }
    updateListElement(listName) {
            var that = this;
            var listItem = _.findWhere(that.lists, {name: that.nameForUpdate});
            listItem.name = listName;
    }
}

export default angular.module('services.listsService', []).service('listsService', listsService).name;