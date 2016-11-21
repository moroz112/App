angular.module('app').controller('cardCtrl', cardCtrl);

cardCtrl.$inject = ['cardFactory'];

this.isEditing = false;
this.editingCard = null;

function cardCtrl(cardFactory) {
    this.deleteCard = function(card) {
        cardFactory.deleteCard(card);
    };
    this.editCard = function(card) {
        this.isEditing = true;
        this.editingCard = angular.copy(card);
    };
    this.updateCard = function(card) {
      cardFactory.updateCard(this.editingCard);
      this.isEditing = false;
      this.editingCard = null;
    }
}