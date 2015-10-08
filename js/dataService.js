// JavaScript Document

/*
 Aaron Robert Wilson
 October 10, 2015 - Week 2
 FWF Course | 201510-01
 Student ID: 0004619821
 Professor: Sean Bernath
 Full Sail University
*/

angular.module('aarons_app').service("dataService", function() {

    /* default list */
    var employees_array = [{
        name: "Alfred Pfeffinger",
        position: "Project Manager",
        phone: "(215) 856-7629",
        email: "pmpfeff@gmail.com",
        address: "1216 Chestnut Street",
        city: "Philadelphia",
        state: "PA",
        zip: "19153"
    }, {
        name: "Peter Civetta",
        position: "Union Carpenter",
        phone: "(267) 659-1345",
        email: "civattap@intech.com",
        address: "1500 Central Avenue",
        city: "Swedesboro",
        state: "NJ",
        zip: "09792"
    }, {
        name: "Jessica Rudaro",
        position: "Store Manager",
        phone: "(313) 714-5736",
        email: "jessruda@target.com",
        address: "12534 Southfield Highway",
        city: "Southfield",
        state: "MI",
        zip: "33546"
    }, {
        name: "Johnathon Reardon",
        position: "Realtor",
        phone: "(610) 544-2448",
        email: "johnrear@imail.com",
        address: "2131 Landlord Lane",
        city: "Springfield",
        state: "MO",
        zip: "63213"
    }];

    /* call the array - employees */
    this.get_employees = function() {
        var employee_storage = localStorage.getItem("employee_directory");
        employees_array = JSON.parse(employee_storage) || employees_array;
        return employees_array;
    };

    /* add new employee - array */
    this.new_employee = function(name, title, addy, city, st, zip, ph, email) {
        var new_employee = {
            name: name,
            position: title,
            address: addy,
            city: city,
            state: st,
            zip: zip,
            phone: ph,
            email: email
        };

        employees_array.push(new_employee);
        var employee_storage = JSON.stringify(employees_array);
        localStorage.setItem("employee_directory", employee_storage);
    };

    /* delete employee - array */
    this.remove_employee = function(employee) {
        employees_array.splice(employees_array.indexOf(employee), 1);
        var employee_storage = JSON.stringify(employees_array);
        localStorage.setItem("employee_directory", employee_storage);
    }
});