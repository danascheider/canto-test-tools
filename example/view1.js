require(process.cwd() + '/example/main.js');

var fs = require('fs');

var View1 = Backbone.View.extend({
  tagName   : 'div',
  id        : 'top',
  template  : _.template(fs.readFileSync(process.cwd() + '/example/templates/example1.html').toString()),

  render    : function() {
    this.$el.html(this.template());
    $('body').html(this.$el);
  }
});

module.exports = View1;