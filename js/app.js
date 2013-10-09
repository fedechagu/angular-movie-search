
var AngularJsDemo = angular.module('AngularJsDemo', ['ngResource']);

AngularJsDemo.factory('Movies', function ($http) {
    var imdbapi;
    this.baseUrl = 'http://mymovieapi.com/';
  
    var url = this.baseUrl + '?title=batman&type=jsonp&plot=full&episode=1&limit=10&yg=0&mt=none&lang=en-US&offset=&aka=simple&release=simple&business=0&tech=0';
    this.imdbapi = function () { };
    this.getMoviesAsync = function (callback, imbdapi) {
        $http.jsonp(url).done(function (callback) {
            debugger;
        });
    }
    return this
});


function SearchController($scope, $resource) {

    var MovieList = $resource('http://mymovieapi.com/', {
        'title': 'batman',
        'type': 'jsonp',
        'limit': '10'
    });

    $scope.data.movies = MovieList.get();
};


