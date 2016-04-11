//= require angular/employees/employees.service
//= require angular/employees/employees.controller

(function(){
	angular.module("pos").requires.push("pos.employees");

	angular.module("pos.employees",[
		"pos.employees.service",
		"pos.employees.controller",
	]);
})();