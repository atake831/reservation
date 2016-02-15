// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.


(function () {
    "use strict";

    var app = angular.module('app', ['ngRoute', 'ui.calendar', 'ui.bootstrap']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: 'views/home.html' })
            .when('/select', { templateUrl: 'views/select.html' })
            .when('/me', { templateUrl: 'views/profile.html' })
            .when('/admin', { templateUrl: 'views/admin.html' })
            .otherwise({redirectTo: '/home'});
    });

    app.controller('AppController', function ($scope, $location) {
        $(document).ready(function(){
            $location.path('/home');
        });
    });
    app.controller('AdminController', function ($scope, $location, $timeout) {
        $scope.showReservation = true;
        $scope.cancel = function() {
            alert('予約を取り消しました');
            $scope.showReservation = false;
        };
        $scope.confirm = function() {
            alert('予約を確定しました');
            $scope.showReservation = false;
            $scope.eventSources[0].events.push({
                title: "竹口",
                start: "2016-02-18T12:00:00",
                end: "2016-02-18T14:00:00",
            });
        };
        $scope.eventSources = [
            {
                events: [
                    {
                        title: "中塚",
                        start: "2016-02-18T10:00:00",
                        end: "2016-02-18T12:00:00",
                    },
                    {
                        title: "田中",
                        start: "2016-02-18T15:00:00",
                        end: "2016-02-18T18:00:00",
                    }
                ],
                color: '#F6CECE',
                textColor: 'black',
                borderColor: 'white'
            }
        ];

        $scope.uiConfig = {
            calendar: {
                header: {
                    left: ''
                },
                firstDay: 1, // 1:月曜日
                weekends: true,
                weekNumbers: false,
                contentHeight: 450,
                defaultView: 'agendaWeek',
                allDaySlot: false,
                axisFormat: 'H時',
                slotDuration: '00:30:00',
                snapDuration: '00:30:00',
                scrollTime: '09:00:00',
                minTime: '06:00:00',
                maxTime: '25:00:00',
                timeFormat: 'H(:mm)',
                columnFormat: {
                    week: "M/D ddd",
                },
                buttonText: {
                    prev:     '<', // <
                    next:     '>', // >
                    today:    '今日',
                    month:    '月',
                    week:     '週',
                    day:      '日'
                },
                monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
                dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
                selectable: true,
                select: function(start, end, event, view) {
                    $rootScope.selected = {
                        start: start,
                        end: end
                    };
                    $location.path('/select');
                    // alert("selected: " + start + " - " + end );
                },
                selectHelper: true,
                unselectAuto: true,
                unselectCancel: '',
            }
        };
    });
    app.controller('SelectController', function ($scope, $location, $rootScope) {
        $scope.start = $rootScope.selected.start;
        $scope.end = $rootScope.selected.end;
        $scope.courts = [
            { 
                name: '豊洲',
            },
            { 
                name: '川口',
            },
        ];
        $scope.selectedCourt = $scope.courts[0];
        $scope.reserve = function() {
            alert("予約を受け付けました");
            $location.path('/home');
        }
    });
    app.controller('HomeController', function ($scope, $rootScope, $location) {
        $scope.admin = function() {
            $location.path('/admin');
        }
        $scope.eventSources = [
            {
                events: [
                    {
                        title: "所沢",
                        start: "2016-02-18T10:00:00",
                        end: "2016-02-18T12:00:00",
                    },
                    {
                        title: "所沢",
                        start: "2016-02-18T15:00:00",
                        end: "2016-02-18T20:00:00",
                    }
                ],
                color: '#F6CECE',
                textColor: 'black',
                borderColor: 'white'
            },
            {
                events: [
                    {
                        title: "豊洲",
                        start: "2016-02-18T06:00:00",
                        end: "2016-02-18T08:00:00",
                    },
                    {
                        title: "豊洲",
                        start: "2016-02-18T09:00:00",
                        end: "2016-02-18T12:00:00",
                    }
                ],
                color: '#A9E2F3',
                textColor: 'black',
                borderColor: 'white'
            }
        ];
        
        $scope.uiConfig = {
            calendar: {
                header: {
                    left: ''
                },
                firstDay: 1, // 1:月曜日
                weekends: true,
                weekNumbers: false,
                contentHeight: 450,
                defaultView: 'agendaWeek',
                allDaySlot: false,
                axisFormat: 'H時',
                slotDuration: '00:30:00',
                snapDuration: '00:30:00',
                scrollTime: '09:00:00',
                minTime: '06:00:00',
                maxTime: '25:00:00',
                timeFormat: 'H(:mm)',
                columnFormat: {
                    week: "M/D ddd",
                },
                buttonText: {
                    prev:     '<', // <
                    next:     '>', // >
                    today:    '今日',
                    month:    '月',
                    week:     '週',
                    day:      '日'
                },
                monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
                dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
                selectable: true,
                select: function(start, end, event, view) {
                    $rootScope.selected = {
                        start: start,
                        end: end
                    };
                    $location.path('/select');
                },
                selectHelper: true,
                unselectAuto: true,
                unselectCancel: '',
            }
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
