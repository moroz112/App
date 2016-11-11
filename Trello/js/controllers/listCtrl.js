angular.module('app').controller('listCtrl', listCtrl);

listCtrl.$inject = ['listsFactory', 'cardFactory'];
function listCtrl(listsFactory, cardFactory) {
    console.log('listCtrl');
    this.removeList = function(list) {
        listsFactory.removeList(list);
    };
    this.getCards = function(list) {
        return cardFactory.getCards(list);
    };
    this.createCard = function(list) {
        cardFactory.createCard(list, this.cardName);
        this.cardName = '';
    }
}