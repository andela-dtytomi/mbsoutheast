'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication', '$upload', 'Users',
 function($scope, $http, $location, Authentication, $upload, Users ) {
    $scope.authentication = Authentication;

    // If user is signed in then redirect back home
    if ($scope.authentication.user) $location.path('/');

    $scope.source1 = {};
    $scope.source2 = {};
    $scope.master = {};
    $scope.user = {};

    $scope.steps = [
        'Personal Details',
        'Create your account',
        'Upload your Profile Picture'
      ];

    $scope.selection = $scope.steps[0];

    $scope.getCurrentStepIndex = function(){
        // Get the index of the current step given selection
        return _.indexOf($scope.steps, $scope.selection);
      };

      // Go to a defined step index
      $scope.goToStep = function(index) {
        if ( !_.isUndefined($scope.steps[index]) )
        {
          $scope.selection = $scope.steps[index];
        }
      };

    $scope.hasNextStep = function(){
        var stepIndex = $scope.getCurrentStepIndex();
        var nextStep = stepIndex + 1;
        // Return true if there is a next step, false if not
        return !_.isUndefined($scope.steps[nextStep]);
      };

      $scope.hasPreviousStep = function(){
        var stepIndex = $scope.getCurrentStepIndex();
        var previousStep = stepIndex - 1;
        // Return true if there is a next step, false if not
        return !_.isUndefined($scope.steps[previousStep]);
      };

      $scope.incrementStep = function(user) {
        if ( $scope.hasNextStep() )
        {
          var stepIndex = $scope.getCurrentStepIndex();
            console.log($scope.selection);
            if ($scope.selection === 'Personal Details') {
                angular.copy(user, $scope.source1);
            } else{

              if ($scope.selection === 'Create your account') {
                  angular.copy(user, $scope.source2);
              }

            }
            angular.extend($scope.master, $scope.source2, $scope.source1);
            
          var nextStep = stepIndex + 1;
          $scope.selection = $scope.steps[nextStep];
        }
      };

      $scope.decrementStep = function() {
        if ( $scope.hasPreviousStep() )
        {
          var stepIndex = $scope.getCurrentStepIndex();
          var previousStep = stepIndex - 1;
          $scope.selection = $scope.steps[previousStep];
        }
      };

     $scope.onFileSelect = function ($files) {
            $scope.uploadProgress = 0;
            $scope.files = $files;

            if ($scope.files) { 
                if ($scope.files[0].type === 'image/jpeg' || $scope.files[0].type === 'image/png') {
                    $scope.correctFormat = true; 
                } else {
                   $scope.correctFormat = false; 
                  }
              }
        };

         $scope.reset = function() {
           // Example with 2 arguments
           angular.copy($scope.master, $scope.user);
           console.log($scope.master);
           console.log($scope.user);
           return $scope.user;
         };


        $scope.uploadProgress = 0;

    $scope.signup = function() {

       $scope.reset();

      var user = new Users ($scope.user);
      console.log($scope.user);

      $scope.upload = $upload.upload({
                url: '/auth/signup',
                method: 'POST',
                data: $scope.user,
                file: $scope.files[0]
            }).progress(function (evt) {
                $scope.uploadProgress = parseInt(100.0 * evt.loaded / evt.total, 10);
            }).success(function(response) {
              // If successful we assign the response to the global user model
              $scope.authentication.user = response;
              // And redirect to the index page
              $location.path('/admin');
            }).error(function(err, response) {
              $scope.error = response.message;

            });
    };

    $scope.signin = function() {
      $http.post('/auth/signin', $scope.user).success(function(response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;
          console.log(response);
        // And redirect to the index page
        $location.path('/admin');
      }).error(function(response) {
        $scope.error = response.message;
      });
    };
  }
])
.directive('progressBar', [
    function () {
        return {
            link: function ($scope, el, attrs) {
                $scope.$watch(attrs.progressBar, function (newValue) {
                    el.css('width', newValue.toString() + '%');
                });
            }
        };
    }
]);