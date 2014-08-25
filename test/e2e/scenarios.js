'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  it('should redirect index.html to index.html#/movies', function () {
    browser.get('index.html');
    browser.getLocationAbsUrl().then(
      function(url) {
        expect(url.split('#')[1]).toBe('/movies');
      }
    );
  });

  it('should automatically redirect to /movies when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/movies");
  });


  describe('movies', function() {

    // Set up and initiate API call to load DOM
    beforeEach(function() {
      browser.get('index.html#/movies');
      // search_bar is the input space on page
      var search_bar = element(by.model('text'));
      // Predetermind query of 'The Lord of the Rings'
      search_bar.sendKeys('The Lord of the Rings');
      // Send the submit action to the form >> Equivalent to typing in the search bar and then pressing `Enter`
      search_bar.submit();
    });

    it('should show 10 results from input string \'The Lord of the Rings\'', function() {
      // The list of results is populated and DOM element selected
      var search_results = element.all(by.repeater('movie in movies'));
      // Count the results from the query (known ahead of time)
      expect(search_results.count()).toBe(10);
    });

    it('should successfully limit the results of \'The Lord of the Rings\' to 1 when using filter of \'episode\'', function() {
      // The list of results is populated and DOM element selected
      var search_results = element.all(by.repeater('movie in movies'));
      // The filter bar
      var filter = element(by.model('query'));
      filter.sendKeys('episode');
      expect(search_results.count()).toBe(1);
    });

    it('should reorder search results by \'newest\' and \'oldest\'', function() {
      // Grab `Sort By` dropdown menu
      var drop_down_filter = element(by.model('orderProp'));
      var search_results = element.all(by.repeater('movie in movies'));
      // Order results by newest
      drop_down_filter.element(by.css('option[value="-Year"]')).click();
      // Make sure the year is '2006'
      expect(search_results.first(by.css('li span .Year')).getText()).toMatch("2006");
      // Order results by oldest
      drop_down_filter.element(by.css('option[value="Year"]')).click();
      // Make sure the year is '1978'
      expect(search_results.first(by.css('li span .Year')).getText()).toMatch("1978");
    });

  });


  describe('details', function() {

    beforeEach(function() {
      browser.get('index.html#/movies/tt0412935');
    });


    it('should display title release year when user navigates to /movies/tt0412935', function() {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
        toMatch("2004");
    });

  });
});
