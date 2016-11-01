// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('ionicApp', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('eventmenu.checkin', {
      url: "/check-in",
      views: {
        'menuContent' :{
          templateUrl: "templates/check-in.html",
          controller: "CheckinCtrl"
        }
      }
    })
    .state('eventmenu.attendees', {
      url: "/attendees",
      views: {
        'menuContent' :{
          templateUrl: "templates/attendees.html",
          controller: "AttendeesCtrl"
        }
      }
    })
    .state('eventmenu.page1', {
      url: "/page1",
      views: {
        'menuContent' :{
          templateUrl: "templates/page1.html",
          controller: "Page1Ctrl"
        }
      }

    })
    .state('eventmenu.digitus', {
      url: "/digitus",
      views: {
        'menuContent' :{
          templateUrl: "templates/digitus.html",
          controller: "DigitusCtrl"
        }
      }

    })
    .state('eventmenu.effect', {
      url: "/effect",
      views: {
        'menuContent' :{
          templateUrl: "templates/effect.html",
          controller: "EffectCtrl"
        }
      }

    })
  
  $urlRouterProvider.otherwise("/event/home");
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('CheckinCtrl', function($scope) {
  $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
})

.controller('AttendeesCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
})

.controller('Page1Ctrl',function($scope){

})

.controller('DigitusCtrl',function($scope){
    var videoUrl = "rtsp://192.168.1.13:554/11";

  // Just play a video
   $scope.playVitamio = function(){ 
     console.log("Connecting to camera...")
     window.plugins.vitamio.playVideo("rtsp://admin:admin@192.168.1.13:554/11");}
})

.controller('EffectCtrl',function($scope){
 

 
  function ground() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#ground", 35, {
      backgroundPosition: "1301px 0px",
      force3D: true,
      rotation: 0.01,
      z: 0.01,
      autoRound: false,
      ease: Linear.easeNone
    });

    return tl;
  }

  function clouds() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#clouds", 17, {
      backgroundPosition: "-2247px bottom",
      force3D: true,
      rotation: 0.01,
      z: 0.01,
      //autoRound:false,
      ease: Linear.easeNone
    });

    return tl;
  }

  function fence() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#fence", 20, {
      backgroundPosition: "-2247px bottom",
      force3D: true,
      rotation: 0.09,
      z: 0.01,
      autoRound: false,
      ease: Linear.easeNone
    });

    return tl;
  }

  function plants() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#plants", 20, {
      backgroundPosition: "-2247px bottom",
      force3D: true,
      rotation: 0.09,
      z: 0.01,
      autoRound: false,
      ease: Linear.easeNone
    });

    return tl;
  }

  function graveyard() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#graveyard", 20, {
      backgroundPosition: "-2247px bottom",
      force3D: true,
      rotation: 0.09,
      z: 0.01,
      autoRound: false,
      ease: Linear.easeNone
    });

    return tl;
  }

  function trees() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#trees", 27, {
      backgroundPosition: "-2247px bottom",
      force3D: true,
      rotation: 0.09,
      z: 0.01,
      autoRound: false,
      ease: Linear.easeNone
    });

    return tl;
  }
  masterTL = new TimelineMax({
    repeat: -1
  });

  // window load event makes sure image is 
  // loaded before running animation
  $scope.$on('$ionicView.loaded', function(){

    masterTL
      .add(plants(), 0)
      .add(ground(), 0)
      .add(clouds(), 0)
      .add(fence(), 0)
      .add(trees(), 0)
      .add(graveyard(), 0)
      .timeScale(0.7)
      .progress(1).progress(0)
      .play();

  })
});




