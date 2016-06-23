var myModule = angular.module('MyApp', []);

myModule.controller('MyController', function () {
  var self = this;

    self.red = {
        description: 'I\'m Red',
        description2: 'Red is a primary color',
        bodystyle: 'red-body',
        firstdiv: 'red-first-div',
        seconddiv: 'red-second-div'
    };

    self.blue = {
        description: 'I\'m Blue',
        description2: 'Blue is a primary color',
        bodystyle: 'blue-body',
        firstdiv: 'blue-first-div',
        seconddiv: 'blue-second-div'

    };

    self.yellow = {
        description: 'I\'m Yellow',
        description2: 'Yellow is a primary color',
        bodystyle: 'yellow-body',
        firstdiv: 'yellow-first-div',
        seconddiv: 'yellow-second-div'
    };

    self.green = {
        description: 'I\'m Green',
        description2: 'Green is a secondary color',
        bodystyle: 'green-body',
        firstdiv: 'green-first-div',
        seconddiv: 'green-second-div'
    };

    self.purple = {
        description: 'I\'m Purple',
        description2: 'Purple is a secondary color',
        bodystyle: 'purple-body',
        firstdiv: 'purple-first-div',
        seconddiv: 'purple-second-div'
    };
});