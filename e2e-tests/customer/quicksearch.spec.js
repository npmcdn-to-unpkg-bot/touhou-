// spec.js
describe('Customer Quick Search', function() {

  var searchForm = element.all(by.tagName('quick-search')).get(0);
  var searchField = searchForm.element(by.tagName('input'));
  var searchButton = searchForm.element(by.tagName('button'));

  // Sample helper functions for reference only
  // function add(a, b) {
  //   firstNumber.sendKeys(a);
  //   secondNumber.sendKeys(b);
  //   goButton.click();
  // }

  // beforeEach(function() {
  //   browser.get('http://juliemr.github.io/protractor-demo/');
  // });

  describe('From Sidebar', function() {

  });
  
  describe('From Dashboard', function() {
    it('should redirect to customer detailed search page', function() {
      // Got to dashboard
      browser.get('/');
      searchField.sendKeys('eee');
      searchButton.click();

      expect(browser.getCurrentUrl()).toEqual('http://127.0.0.1:3002/#/customer/search?c_id=eee');

    });

    it('works with both button click and return key', function() {
      // TODO
    });

    it('clears field after search', function() {
      // TODO
    });

  });
});
