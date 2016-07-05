var myModule = angular.module('MyApp');

myModule.service('FindAverage', function () {
  var self = this;
  self.findAverage = function (array) {
    var sumAssignments = 0;

      array.forEach(function(assignment){
        sumAssignments += assignment.grade;
      });

      return sumAssignments / array.length;
    };
});