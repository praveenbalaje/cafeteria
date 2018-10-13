// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform,$state,$ionicHistory,$ionicPopup) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $ionicPlatform.registerBackButtonAction(function (event) {
      event.preventDefault();
      if ($state.current.name == "home" || $state.current.name == "login") {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Exit',
          template: 'Confirm Exit'
        });

        confirmPopup.then(function (res) {
          if (res) {
            navigator.app.exitApp();
          }

        });
      } else if($state.current.name == "signup")
      {
        $ionicHistory.nextViewOptions({ disableBack: true });
        $state.go('login');
      }
      else if($state.current.name == "qr")
      {
        
      }
      else   {
        $ionicHistory.nextViewOptions({ disableBack: true });
        $state.go('home');
      }
    }, 800);//registerBackButton

  });
})
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login',{
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('signup',{
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
  .state('home',{
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .state('category',{
    url: '/category',
    templateUrl: 'templates/category.html',
    controller: 'categoryCtrl'
  })
  .state('tiffin',{
    url: '/tiffin',
    templateUrl: 'templates/tiffin.html',
    controller: 'tiffinCtrl'
  })
  .state('snacks',{
    url: '/snacks',
    templateUrl: 'templates/snacks.html',
    controller: 'snacksCtrl'
  })
  .state('order',{
    url: '/order',
    templateUrl: 'templates/order.html',
    controller: 'orderCtrl'
  })

  .state('qr',{
    url: '/qr',
    templateUrl: 'templates/qr.html',
    controller: 'qrCtrl'
  })
  .state('history',{
    url: '/history',
    templateUrl: 'templates/history.html',
    controller: 'historyCtrl'
  })
  
  $urlRouterProvider.otherwise('login');
});
