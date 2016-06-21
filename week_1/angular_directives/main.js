var myModule = angular.module('MyApp', []);

myModule.controller('MyController', function() {
  var self = this;
  self.myName = 'Emily';
  self.age = 20;
  self.job = 'Developer';

  self.simpleArray = ['Bart', 'Maggie', 'Lisa'];
});