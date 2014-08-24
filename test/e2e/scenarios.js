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

  browser.get('index.html');

  it('should automatically redirect to /movies when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/movies");
  });


  describe('movies', function() {

    beforeEach(function() {
      browser.get('index.html#/movies');
    });

    it('should show 10 results from input string \'The Lord of the Rings\'', function() {
      // search_bar is the input space on page
      var search_bar = element(by.model('text'));
      var search_results = element.all(by.repeater('movie in movies'));
      // Predetermind query of 'The Lord of the Rings'
      search_bar.sendKeys('The Lord of the Rings');
      // Send the submit action to the form >> Equivalent to typing in the search bar and then pressing `Enter`
      search_bar.submit();
      // Count the results from the query (known ahead of time)
      expect(search_results.count()).toBe(10);
    })


    it('should render movies when user navigates to /movies', function() {
      expect(element.all(by.css('[ng-view] select option')).first().getText()).
        toMatch('Alphabetical');
    });

  });


  describe('details', function() {

    beforeEach(function() {
      browser.get('index.html#/movies/tt0412935');
    });


    it('should render view2 when user navigates to /movies/tt0412935', function() {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
        toMatch("2004");
    });

  });
});
