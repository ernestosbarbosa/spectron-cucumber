var { Given, When, Then } = require('cucumber');
var expect = require('chai').expect

Given(/^que estou com o app aberto$/, function () {
  return this.app.start();
});

When(/^clico em "([^"]*)"$/, function (item) {
  return this.app.client.element('[nw-path="~/' + item + '"]').click();
});

Then(/^exibe a lista de imagens$/, function () {
  this.app.client.isVisible('#file').then(function (isVisible) {
    expect(isVisible).to.eql(true);
  });
});

