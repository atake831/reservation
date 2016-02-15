// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    var app = angular.module('app', ['onsen']);

    app.controller('AppController', function ($scope) {
        ons.ready(function(){
            appNavigator.replacePage('views/tabbar.html', { animation: 'none'});
        });
    });
    app.controller('TabController', function ($scope) {
        $scope.doSomething = function () {
            ons.notification.alert({ message: 'tapped' });
        };
    });
    app.controller('HomeController', function ($scope) {
        $scope.viewDetail = function (id) {
            homeNavigator.pushPage('views/detail.html');
        };
        $scope.addContents = function () {
            ons.notification.alert({ message: 'addContents tapped' });
        };
    });

    // protoはcordova使わない
    // document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    //
    // function onDeviceReady() {
    //     // Handle the Cordova pause and resume events
    //     document.addEventListener( 'pause', onPause.bind( this ), false );
    //     document.addEventListener( 'resume', onResume.bind( this ), false );
    //
    //     // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    // };
    //
    // function onPause() {
    //     // TODO: This application has been suspended. Save application state here.
    // };
    //
    // function onResume() {
    //     // TODO: This application has been reactivated. Restore application state here.
    // };
} )();
