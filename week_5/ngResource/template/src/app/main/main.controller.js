(function () {
  'use strict';

  angular
      .module('template')
      .controller('MainController', function ($resource) {
          var self = this;
          var myResourceObject = $resource('assets/json/people.json');

          self.greeting = "Hello World!";

          var myResourceObject = $resource('assets/json/people.json', {limit: 100}, 
            {
              getListOfPeople: {
                method: 'GET',
                isArray: true,
                headers: {
                  accept: 'application/json',
                  userToken: 'abcdefg'
                },
                saveListOfPeople: {
                  method: 'POST',
                  isArray: false
                }
              }
            });

          var promise =myResourceObject.getListOfPeople().$promise;

          promise.then(function onSuccess(response){

          }, function onError(error){
            console.log('ERROR:', error);
          })

      });
   
})();
