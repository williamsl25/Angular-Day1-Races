(function (){

  angular
    .module('races')
    .controller('MainController', function($scope){

    })
    .controller('RacesController', function($scope, RacesService){
      RacesService.getRaces().success(function (races){
        console.log(races);
        $scope.runRaces = races;
      });
      var races = [
        {
          title: "Kiawah Island Marathon",
          image: "http://www.kiawahresort.com/images/hero-photos/header-marathon-2014-en-gb.jpg",
          date:  "Second Sunday in December",
          description: "Now entering its 38th year, the Kiawah Island Golf Resort Marathon starts and finishes in beautiful East Beach Village. Along the way, you'll enjoy spectacular views of maritime forests, marshes, and grand homes, as you run throughout the Island community. The only thing more wonderful than the scenery is the moment when you cross the finish line, after completing your full or half marathon!",
        },
        {
          title: "Chicago Marathon",
          image: "http://freepmarathon.com/wp-content/themes/marathon2012/images/carousel/slider_four.jpg",
          date: "Second Sunday in October",
          description: "There's not a single spot on the course without spectators, as 1.7 million of them line Chicago's streets to encourage runners. The course winds through 29 neighborhoods, giving you a run-by tour of can't-miss spots like Wrigley Field, Chinatown, and Lake Michigan. (Learn more about the Windy City's best running route, the Chicago Lakefront Trail.) Don't forget to snap a photo in front of the famous Bean--a giant reflective sculpture shaped like a legume--after the postrace party, which takes place in the 319-acre Grant Park.",
        },
        {
          title: "Portland Marathon",
          image: "http://www.runnersworld.com/sites/runnersworld.com/files/styles/slideshow-desktop/public/chicagomarathon.jpg",
          date: "First Sunday in October",
          description: "Portland might be the perfect first-timer event. It offers a mostly flat course with a not-too-big but not-too-small field. The average race-day temp hovers around 55 degrees, and the course shows off the city's waterfront and runs near the trendy Pearl District. The route also features more than 85 local bands, DJs, and cheerleading squads. Expect stellar swag--in addition to a race T and medal, finishers get a pendant that can fit on a keychain or necklace, and a tree seedling, which symbolizes the race's commitment to the environment.",
        },
        {
          title: "Detroit Free Press Marathon",
          image: "http://freepmarathon.com/wp-content/themes/marathon2012/images/carousel/slider_four.jpg",
          date: "October 18, 2016",
          description: "Our marathon course offers international appeal, traversing both downtown Detroit and Windsor, Ontario, crossing the border at both the Ambassador Bridge and Detroit-Windsor Tunnel. You will run through historic neighborhoods, around beautiful Belle Isle, and along the spectacular RiverWalk.",
        },
        {
          title: "LA Marathon",
          image: "http://www.runnersworld.com/sites/runnersworld.com/files/styles/slideshow-desktop/public/lamarathon.jpg",
          date: "February 14, 2016",
          description: "The point-to-point course starts outside Dodger Stadium. The route then takes a sightseeing tour through L.A. hotspots, including Hollywood and Chinatown, finishing by the beach in Santa Monica. Mixed in with the tens of thousands of runners and hundreds of thousands of spectators, you may spot a celeb or two. Chef Gordon Ramsay, Flea from the Red Hot Chili Peppers, and Lord of the Rings star Sean Astin have all crossed the finish line, among many others.",
        }
      ];


      $scope.addRace = function (newRace) {
        console.log(newRace);
        RacesService.createRace(newRace);
      };
      $scope.editRace = function (editedRace) {
        console.log(editedRace);
        RacesService.editRace(editedRace);
      };
      $scope.deleteRace = function (passedId) {
        console.log(deletedRace);
        RacesService.deleteRace(passedId);
      };


    });
})();
