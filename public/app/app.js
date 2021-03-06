var app = angular.module("void", ['ngRoute','ui.bootstrap','ngFitText', 'ngResource']);


  app.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

      var routeRoleChecks = {
           admin: {
              auth: function(mvAuth) {
                return mvAuth.authorizeCurrentUserForRoute('admin');              
              }
            },
            user: {
              auth: function(mvAuth) {
                return mvAuth.authorizeAuthenticatedUserForRoute();
              }
           } 
          };

      $routeProvider
       .when('/',{
          templateUrl : "/partials/main.html",
          controller : "mainCtrl"
        })
        .when('/admin/users',{
          templateUrl : "/partials/admin/user-list.html",
          controller : "mvUserListCtrl",
          resolve: routeRoleChecks.admin
        }) 
         .when('/profile',{
          templateUrl : "/partials/account/profile.html",
          controller : "profileCtrl",
          resolve: routeRoleChecks.user
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
    }
  ]);

app.run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt,current,previous,rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');

    }
  });
});