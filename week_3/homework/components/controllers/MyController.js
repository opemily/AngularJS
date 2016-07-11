var myModule = angular.module('MyApp');

myModule.controller('MyController', function () {
    var self = this;
    self.genres = [];
    self.pop = {genre: "pop",
            songs:
            [{artist: 'Akon', title: 'Smack That', explicit: true},
            {artist: 'Amy Winehouse', title: 'Rehab', explicit: true},
            {artist: 'BackStreet Boys', title: 'I Want It That Way', explicit: false},
            {artist: 'Britney Spears', title: 'Oops!... I Did It Again', explicit: false},
            {artist: 'Justin Timberlake', title: 'SexyBack (feat. Timbaland)', explicit: true},
            {artist: 'Ke$ha', title: 'Tik Tok', explicit: false},
            {artist: 'Mariah Carey', title: 'We Belong Together', explicit: false},
            {artist: 'Rhianna', title: 'Umbrella (feat. Jay-Z)', explicit: false},
            {artist: 'Sisqo', title: 'Thong Song', explicit: true},
            {artist: 'The Black Eyed Peas', title: 'I Gotta Feeling', explicit: false}]};
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
    self.genres.push(self.pop, self.rap, self.rock);

    self.userPlaylist = {
        user: self.user,
        age: self.age,
        songs: []
    };
    self.underAge = function (age) {
        if (age < 18) {
            return true;
        }
    };

    self.selectGenre = function (genre) {
        self.selectedGenre = genre;
    };

    self.songFilter = undefined;

    self.filterSongs = function () {
      if (self.filterOn) {
        self.songFilter =  {explicit: false};
      } else {
        self.songFilter = undefined;
      }
    }

});
