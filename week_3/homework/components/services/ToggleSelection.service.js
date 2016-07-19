var myModule = angular.module('MyApp');

myModule.service('ToggleSelection', function () {
  var self = this;
    self.playlist = [];

    self.toggleSelection = function (song) {
        var index = self.playlist.indexOf(song);
        if (index > -1) {
            self.playlist.splice(index, 1);
        } else {
            self.playlist.push(song);
        }
    };

});