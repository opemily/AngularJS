var myModule = angular.module('MyApp');

myModule.value('Rap', function () {
    var self = this;
    self.rap = {genre: "Rap",
            songs:
            [{artist: '50 Cent', title: 'In Da Club', explicit: true},
            {artist: 'LL Cool J', title: 'Around the Way Girl', explicit: false},
            {artist: 'MC Hammer', title: 'U Can\'t Touch This', explicit: false},
            {artist: 'Naughty By Nature', title: 'O.P.P', explicit: false},
            {artist: 'Outkast', title: 'Rosa Parks', explicit: true},
            {artist: 'Snoop Dogg', title: 'Gin and Juice', explicit: true},
            {artist: 'Terror Sqaud', title: 'Lean Back', explicit: true},
            {artist: 'The Notorious B.I.G', title: 'Juicy', explicit: true},
            {artist: 'Will Smith', title: 'Gettin\' Jiggy Wit It', explicit: false},
            {artist: 'Wu Tang Clan', title: 'C.R.E.A.M', explicit: false}]};

});