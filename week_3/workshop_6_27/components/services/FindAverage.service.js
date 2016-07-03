var myModule = angular.module('MyApp');

myModule.service('FindAverage', function () {
  var self = this;
  self.findAverage = function (array) {
    var sumAssignments = 0;
      for (var i = 0; i < array.length; i++) {
        sumAssignments += array[i].grade;
      }
      return sumAssignments / array.length;
    };
});