var myModule = angular.module('MyApp');

myModule.value('Pop', function () {
    var self = this;
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

});