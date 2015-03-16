require(process.cwd() + '/spec/support/jsdom.js');
var matchers = require('jasmine-jquery-matchers');

var View = require(process.cwd() + '/example/view1.js');

describe('View 1', function() {
  var view;

  beforeEach(function() {
    jasmine.addMatchers(matchers);
    view = new View();
    view.render();
  });

  it('displays objects with the `visible` class', function() {
    expect(view.$('.visible')).toBeVisible();
  });

  it('hides objects with the `hidden` class', function() {
    expect(view.$('.hidden')).not.toBeVisible();
  });
});