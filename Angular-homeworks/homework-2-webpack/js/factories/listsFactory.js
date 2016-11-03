import _ from 'lodash';

export default function() {
	var service = {};
	var lists = [
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
	service.getLists = function() {
		return lists;
	};
	service.addList = function(list) {
		lists.push({
			id: _.uniqueId('list-'),
			name: list
		})
	};
	return service;
};
