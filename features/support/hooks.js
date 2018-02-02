var { AfterAll } = require('cucumber');

AfterAll(function () {
  if (this.app && this.app.isRunning()) {
    return this.app.stop();
  }
});
