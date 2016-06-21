var myModule = angular.module('MyApp', []);

myModule.controller('MyController', function () {
  var self = this;

    self.red = {
        description: 'I\'m Red',
        description2: 'Red is a primary color'
    };

    self.blue = {
        description: 'I\'m Blue',
        description2: 'Blue is a primary color'
    };

    self.yellow = {
        description: 'I\'m Yellow',
        description2: 'Yellow is a primary color'
    };

    self.green = {
        description: 'I\'m Green',
        description2: 'Green is a secondary color'
    };

    self.purple = {
        description: 'I\'m Purple',
        description2: 'Purple is a secondary color'
    };
});