var myModule = angular.module('MyApp');

myModule.factory('StudentCreator', function (FindAverage, FindGrade, PassOrFail) {
  var self = this;
    function createStudent(name) {
        this.name = name;
        this.assignments = [{name: 'UI Theme Picker & Folder Display', grade: 100}, {name: 'Folder Heirarchy and Todo List Generator', grade: 80}, {name: 'Student Grade Calculator', grade: 90}, {name: 'Music Playlist', grade: 85}];

        this.passed = PassOrFail.passOrFail(this.grade);
    }

    createStudent.prototype.getAverage = function (assignments) {
        this.average = FindAverage.findAverage(assignments);
        return this.average;
    };

    createStudent.prototype.getGrade = function (average) {
        this.grade = FindGrade.findGrade(average);
        return this.grade;
    };

    createStudent.prototype.getPass = function (grade) {
        this.passed = PassOrFail.passOrFail(grade);
        return this.passed;
    };

    createStudent.prototype.addNew = function (assignment, grade) {
        this.assignments.push({name: assignment, grade: grade});
    };


    return createStudent;

});