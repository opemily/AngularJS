var myModule = angular.module('MyApp');

myModule.service('FindGrade', function () {
  var self = this;
    self.findGrade = function (average) {
        if (average >= 90) {
            return "A";
        } else if (average < 90 && average > 80) {
            return "B";
        } else if (average <= 80 && average > 70) {
            return "B";
        } else if (average <= 70 && average > 60) {
            return "C";
        } else if (average <= 60 && average > 50) {
            return "D";
        } else {
            return "F";
        }
    };
});