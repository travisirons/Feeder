var App = angular.module('feeder', []);

App.controller("feedcntl", ['$scope', 'feedservice', function ($scope, Feed) {
    $scope.loadFeed = function (e) {
        Feed.parseFeed($scope.feedSrc).then(function (res) {
            $scope.feeds = res.data.responseData.feed.entries;
        });
    }
}]);

App.factory('feedservice', ['$http', function ($http) {
    return {
        parseFeed: function (path) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=JSON_CALLBACK&q=' + encodeURIComponent(path));
        }
    }
}]);