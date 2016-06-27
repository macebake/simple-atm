simpleATM.factory('TransactionFactory', function() {

  var transaction = function(todoText){
    this.text = todoText;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };

  Todo.prototype.complete = function() {
    this.completed = true;
  };

  return transaction;
});
