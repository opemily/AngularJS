var myModule = angular.module('MyApp');
myModule.controller('MyController', function (StudentCreator) {
  var self = this;
    self.students = [];
    self.Bea = new StudentCreator('Bea Kirk');
    self.Emily = new StudentCreator('Emily Oppenheimer');
    self.Jeffrey = new StudentCreator('Jeffrey Carlson');
    self.Nicolas = new StudentCreator('Nicolas Favaro');
    self.Prital = new StudentCreator('Prital Shah');
    self.Renee = new StudentCreator('Renee Lightner');

    self.students.push(self.Bea, self.Emily, self.Jeffrey, self.Nicolas, self.Prital, self.Renee);

});