/*
 Aaron Robert Wilson
 October 10, 2015 - Week 2
 FWF Course | 201510-01
 Student ID: 0004619821
 Professor: Sean Bernath
 Full Sail University
*/

/* app */
/* define app controller */
angular.module('aarons_app', []).controller('employee_cntrl', function($scope, dataService) {

    $scope.employee_name;
    $scope.employee_position;
    $scope.employee_street;
    $scope.employee_city;
    $scope.employee_state;
    $scope.employee_zip;
    $scope.employee_phone;
    $scope.employee_email;

    /* get employess array - dataservice */
    $scope.employee_array = dataService.get_employees();

    console.log($scope.employee_array);

    /* add employee - dataservice */
    $scope.add_employee = function() {
        dataService.new_employee($scope.employee_name, $scope.employee_position, $scope.employee_street, $scope.employee_city, $scope.employee_state, $scope.employee_zip, $scope.employee_phone, $scope.employee_email);

        $scope.employee_name = '';
        $scope.employee_position = '';
        $scope.employee_street = '';
        $scope.employee_city = '';
        $scope.employee_state = '';
        $scope.employee_zip = '';
        $scope.employee_phone = '';
        $scope.employee_email = '';
    };

    /* delete employee - dataservice */
    $scope.delete_employee = function(employee_to_delete) {
        dataService.remove_employee(employee_to_delete);
    };

    /* form reset for add employee */
    $scope.reset_form = function() {
        $scope.employee_name = '';
        $scope.employee_position = '';
        $scope.employee_street = '';
        $scope.employee_city = '';
        $scope.employee_state = '';
        $scope.employee_zip = '';
        $scope.employee_phone = '';
        $scope.employee_email = '';
    }
});
/* end app - controller */