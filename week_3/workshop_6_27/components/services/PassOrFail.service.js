var myModule = angular.module('MyApp');

myModule.service('PassOrFail', function () {
  var self = this;
    self.passOrFail = function (grade) {
        switch (grade) {
        case "A":
        case "B":
        case "C":
            return true;
            break;
        default:
            return false;
        }
    };
});