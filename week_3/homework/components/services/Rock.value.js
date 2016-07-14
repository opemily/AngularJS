var myModule = angular.module('MyApp');

myModule.value('Rock', function () {
    var self = this;
    self.rock = {genre: "Rock",
            songs:
            [{artist: '3 Doors Down', title: 'Kryptonite', explicit: false},
            {artist: 'Evanesence', title: 'Bring Me To Life', explicit: false},
            {artist: 'Green Day', title: 'American Idiot', explicit: true},
            {artist: 'Jet', title: 'Are You Gonna Be My Girl', explicit: false},
            {artist: 'Linkin Park', title: 'Last Resort', explicit: true},
            {artist: 'Papa Roach', title: 'Last Resort', explicit: false},
            {artist: 'Puddle of Mudd', title: 'She Hates Me', explicit: true},
            {artist: 'Queens of the Stone Age', title: 'No One Knows', explicit: true},
            {artist: 'Staind', title: 'It\'s Been Awhile', explicit: true},
            {artist: 'Three Days Grace', title: 'I Hate Everything About You', explicit: false}]};
});