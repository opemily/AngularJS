var myModule = angular.module('MyApp');

myModule.factory('CreatePlaylist', function () {
  function createPlaylist(name, age, songs) {
        this.name = name;
        this.age = age;
        this.songs = songs;
    }

    createPlaylist.prototype.underAge = function (age) {
        if (age < 18) {
            return true;
        }
    };

    return createPlaylist;
});