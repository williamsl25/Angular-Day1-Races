(function () {
  "use strict";
  angular
    .module('races')
    .factory('RacesService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/lindsayWilliamsRaces';

      var getRaces = function () {
        return $http.get(url);
      };

      var addRace = function (newRace) {
        $http.post(url, newRace).then(function (res) {
          console.log(res);
        });
      };

      var editRace = function (editedRace) {
        $http.put(url + '/' + editedRace._id, editedRace);
      };

      var deleteRace = function (passedId) {
        $http.delete(url + '/' + passedId).success(function(){
          console.log(passedId)
        })

      };

      var getOneRace = function (index) {
        return Races[index];
      };

      return {
        getRaces: getRaces,
        createRace: addRace,
        editRace: editRace,
        deleteRace: deleteRace,
        getOneRace: getOneRace
      };

    });
})();
