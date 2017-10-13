(function () {
    var internon = angular.module('internon', [
        'ui.router',
    ]);

    internon.constant('urls', (function () {
        var server = "Intern-On-DB/public";
        return {
            API_HOST: 'http://localhost/' + server + '/api/internon'
        };
    })());

    internon.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('index');
        var states = [
                {   name: 'index',
                    url: '/index',
                    templateUrl: 'templates/index.html',
                    controller: 'indexCtrl'
                },
                // Student
                {   name: 'student',
                    url: '/student',
                    templateUrl: 'templates/student/student.html',
                    controller: 'studentCtrl'
                },
                {   name: 'student.profile',
                    url: '/profile',
                    templateUrl: 'templates/student/profile.html',
                    controller: ''
                },
                {   name: 'student.search',
                    url: '/search',
                    templateUrl: 'templates/student/search.html',
                    controller: ''
                },
                {   name: 'student.schedules',
                    url: '/schedules',
                    templateUrl: 'templates/student/schedules.html',
                    controller: ''
                },
                {   name: 'student.timecard',
                    url: '/timecard',
                    templateUrl: 'templates/student/timecard.html',
                    controller: ''
                },
                {   name: 'student.applications',
                    url: '/applications',
                    templateUrl: 'templates/student/applications.html',
                    controller: ''
                },
                // Coordinator
                {   name: 'coordinator',
                    url: '/coordinator',
                    templateUrl: 'templates/coordinator/coordinator.html',
                    controller: 'coordinatorCtrl'
                },
                {   name: 'coordinator.profile',
                    url: '/profile',
                    templateUrl: 'templates/coordinator/profile.html',
                    controller: ''
                },
                {   name: 'coordinator.enroll',
                    url: '/enroll',
                    templateUrl: 'templates/coordinator/enroll.html',
                    controller: ''
                },
                {   name: 'coordinator.grades',
                    url: '/grades',
                    templateUrl: 'templates/coordinator/grades.html',
                    controller: ''
                },
                {   name: 'coordinator.section',
                    url: '/section',
                    templateUrl: 'templates/coordinator/section.html',
                    controller: ''
                },
                // Company
                {   name: 'company',
                    url: '/company',
                    templateUrl: 'templates/company/company.html',
                    controller: ''
                },
                {   name: 'company.profile',
                    url: '/profile',
                    templateUrl: 'templates/company/profile.html',
                    controller: ''
                },
                {   name: 'company.accounts',
                    url: '/accounts',
                    templateUrl: 'templates/company/accounts.html',
                    controller: ''
                },
                {   name: 'company.departments',
                    url: '/departments',
                    templateUrl: 'templates/company/departments.html',
                    controller: ''
                },
                {   name: 'company.advertisements',
                    url: '/advertisements',
                    templateUrl: 'templates/company/advertisements.html',
                    controller: ''
                },
                {   name: 'company.applications',
                    url: '/applications',
                    templateUrl: 'templates/company/applications.html',
                    controller: ''
                },
                {   name: 'company.interns',
                    url: '/interns',
                    templateUrl: 'templates/company/interns.html',
                    controller: ''
                },
        ]
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });
})();