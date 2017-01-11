var router = angular.module('routerApp', ['ui.router', 'oc.lazyLoad']);
router.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise('/home');



    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'home.html'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'about.html',
       
    })
     .state('home.list', {
         url: '/list',
         templateUrl: 'home-list.html',
         controller: 'testCtrl',
         resolve: {
             test: ['$ocLazyLoad', function ($ocLazyLoad) {
                 return $ocLazyLoad.load({
                     files: [
                         "testCtrl.js",
                     ]
                 });
             }]
         }
     })
}]);


