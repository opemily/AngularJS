var myModule = angular.module('MyApp');

myModule.factory('StudentCreator', function (Assignments, FindAverage, FindGrade, PassOrFail) {
    function createStudent(name) {
        this.name = name;
        this.assignments = angular.copy(Assignments);
        this.calculateTotals();
    }

    createStudent.prototype.addNew = function (assignment, grade) {
        this.assignments.push({name: assignment, grade: grade});
        this.calculateTotals();
    };

    createStudent.prototype.delete = function (assignment) {
        var index = this.assignments.indexOf(assignment);
        this.assignments.splice(index, 1);
        this.calculateTotals();
    };

    createStudent.prototype.calculateTotals = function () {
        this.average = FindAverage.findAverage(this.assignments);
        this.grade = FindGrade.findGrade(this.average);
        this.passed = PassOrFail.passOrFail(this.grade);
    };

    return createStudent;

});