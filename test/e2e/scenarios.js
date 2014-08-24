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
