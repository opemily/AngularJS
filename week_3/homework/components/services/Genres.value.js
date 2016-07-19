var myModule = angular.module('MyApp');

myModule.value('Pop', function (Pop, Rap, Rock) {
    var self = this;
    self.genres = [Pop, Rap, Rock];
});