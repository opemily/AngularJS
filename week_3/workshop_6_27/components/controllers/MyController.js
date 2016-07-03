var myModule = angular.module('MyApp');
myModule.controller('MyController', function (StudentCreator) {
  var self = this;
    self.students = [];
    self.Emily = new StudentCreator('Emily Oppenheimer');
    self.students.push(self.Emily);

    // self.addNew = function () {
    //     self.studentSelected.assignments.push({name: self.newAssignment, grade: self.newGrade});
    // };

    self.delete = function (assignment) {
        var index = self.studentSelected.assignments.indexOf(assignment);
        self.studentSelected.assignments.splice(index, 1);
    };

});
