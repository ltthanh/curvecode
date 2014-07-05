angular.module('Twitter', ['ngResource']);
/*
 * @controller: HelloController
 */
function HelloController ($scope) {
    $scope.greeting = { text : 'Hello'};
}

/*
 * @controller: 
 */
function exampleController($scope){
    $scope.anApple = {text : 'Apple'};
}

function twittersearch(){
    alert('this is ok');
}

function angularjs02($scope, $resource){
    $scope.twitter = $resource('http://search.twitter.com/:action', 
        {action:'search.json', q:'angularjs', callback: 'JSON_CALLBACK'},
        {get:{method:'JSONP'}});
    $scope.twitter.get(function(result){
        alert('this is better');
    });
}

$(document).ready(function(){
    alert('here');
});