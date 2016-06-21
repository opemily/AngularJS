var myModule = angular.module('MyApp', []);

myModule.controller('MyController', function () {
  var self = this;

    self.firstName = 'Emily';
    self.lastName = 'Oppenheimer';
    self.toggle = true;

    self.editName = function () {
        self.toggle = false;
    };

    self.save = function () {
        self.firstName = self.newFirstName;
        self.lastName = self.newLastName;
        self.toggle = true;
    };

    self.cancel = function () {
        self.toggle = true;
    };


});