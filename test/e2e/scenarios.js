'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /movies when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/movies");
  });


  describe('movies', function() {

    beforeEach(function() {
      browser.get('index.html#/movies');
    });


    it('should render movies when user navigates to /movies', function() {
      expect(element.all(by.css('[ng-view] ul')).first().getText()).
        toMatch(/partial for movies/);
    });

  });


  describe('details', function() {

    beforeEach(function() {
      browser.get('index.html#/details');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
