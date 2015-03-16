var jsdom = require('jsdom').jsdom;
var fs    = require('fs');

var html = fs.readFileSync(process.cwd() + '/spec/support/document.html')

global.document = jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
global.window   = document.defaultView;