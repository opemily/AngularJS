var myModule = angular.module('MyApp');

myModule.service('SongFilter', function () {
  var self = this;
    self.songFilter = undefined;

    self.filterSongs = function () {
        if (self.filterOn) {
            self.songFilter = {explicit: false};
        } else {
            self.songFilter = undefined;
        }
    };

});