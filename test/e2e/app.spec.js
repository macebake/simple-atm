describe("atm", function() {

  beforeEach(function(){
    browser.get('/');
  });

  it("should get home page title", function() {
    expect(browser.getTitle()).toEqual("Simple ATM");
  });

  it('Should display a starting balance of 0.00', function() {
    var el = $('.balance');
    expect(el.getText()).toEqual('Current Balance: £ 0');
  });

  it('Has a deposit button', function(){
    var el = $('.deposit');
    expect(el.getText()).toEqual('Deposit');
  });

  it('Has a withdrawal button', function(){
    var el = $('.withdrawal');
    expect(el.getText()).toEqual('Withdrawal');
  });

  it('Can add money to balance', function(){
    var deposit = element(by.model('depositAmount'));
    deposit.sendKeys(100);
    element(by.buttonText('Deposit')).click();
  });

  it('Can withdraw money from balance', function(){
    var balance = $('.balance');
    var deposit = element(by.model('depositAmount'));
    var withdrawal = element(by.model('withdrawalAmount'));
    deposit.sendKeys(100);
    element(by.buttonText('Deposit')).click();
    withdrawal.sendKeys(40);
    element(by.buttonText('Withdrawal')).click();
    expect(balance.getText()).toEqual('Current Balance: £ 60');
  });

  it('Throws an error if withdrawal is more than balance', function(){
    var withdrawal = element(by.model('withdrawalAmount'));
    var balance = $('.balance');
    withdrawal.sendKeys(20);
    element(by.buttonText('Withdrawal')).click();
    expect(balance.getText()).toEqual('Current Balance: £ 0');
  });

});
