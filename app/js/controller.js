simpleATM.controller('SimpleATMController', [function() {
  this.balance = 0;
  this.date = new Date();
  this.amount = 0;

  this.deposit = function(amount){
      this.balance += amount;
  };

  this.withdrawal = function(amount){
    if (amount < this.balance) {
      this.balance -= amount;
    }
  };

}]);
