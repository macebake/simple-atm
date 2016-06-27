describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Simple ATM");
  });

  it('Should display a starting balance of 0', function() {
    browser.get('/');
    var el = $('.balance');
    expect(el.getText()).toEqual('0');
  });
});
