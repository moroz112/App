import angular from 'angular';
import _ from 'lodash';

class listsService {
	constructor() {
		this.lists = [
			{
				id: 1,
				name: "AngularJS"
			},
			{
				id: 2,
				name: "Backbone"
			},
			{
				id: 3,
				name: "ReactJS"
			}
		];
	}
	getLists() {
		return this.lists;
	}
	addList(list) {
		this.lists.push({
			id: _.uniqueId('list-'),
			name: list
		})
	}
}
export default angular.module("listsService", []).service("listsService", listsService).name;
