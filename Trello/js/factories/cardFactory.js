angular.module('app').factory('cardFactory', function() {
    var service = {};
    var cards = [
        {
            id: 1,
            name: "Clean apartment",
            list_id: 1
        },
        {
            id: 2,
            name: "wash dishes",
            list_id: 2
        },
        {
            id: 3,
            name: "Learn javascript",
            list_id: 3
        }
    ];
    service.getCards = function(list) {
      return _.filter(cards, {list_id: list.id});
    };
    service.createCard = function(list, cardName) {
      cards.push({
         id: _.uniqueId("card_"),
          name: cardName,
          list_id: list.id
      });
    };
    return service;
});