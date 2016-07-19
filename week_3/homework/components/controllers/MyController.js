var myModule = angular.module('MyApp');

myModule.controller('MyController', function (CreatePlaylist, Genres, SongFilter, ToggleSelection, UserPlaylist) {
    var self = this;

    self.selectGenre = function (genre) {
        self.selectedGenre = genre;
    };

    self.savePlaylist = function () {
       var newPlaylist = new CreatePlaylist.createPlaylist(self.userName, self.userAge, ToggleSelection.playlist);
       console.log(newPlaylist)

    }

});
