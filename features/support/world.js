var { setWorldConstructor } = require('cucumber');
var Application = require('spectron').Application;
var electron = require('electron');

setWorldConstructor(function () {
  this.app = new Application({
    path: electron,
    args: ['file-explorer']
  });
});
