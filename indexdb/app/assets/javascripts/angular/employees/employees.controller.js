var EmployeeController = (function() {
	'use strict';

	function EmployeeController(args) {
		// enforces new
		if (!(this instanceof EmployeeController)) {
			return new EmployeeController(args);
		}
		this.index.$inject = [
			"$scope",
			"$rootScope",
			"$idbw",
			"EmployeesResourceService",
			"CountryIndexdbService",
			"CountryResourceService",
		];
		angular.module("pos.employees.controller", [])
			.controller("EmployeeController", this.index);
		// constructor body
	}

	var fillIDBWrapper = function($idbw, CountryResourceService) {
		CountryResourceService.getCountries();

		// .$promise.then(function(data) {
		// 	var date1 = new Date();
		// 	var onsuccess = function(id) {
		// 		var date2 = new Date();
		// 		console.log("Data IDB");
		// 		console.log(date2 - date1);
		// 	};
		// 	var onerror = function(error) {
		// 		var date2 = new Date();
		// 		console.log("Data IDB");
		// 		console.log(date2 - date1);
		// 	};
		// 	$idbw.employee.put(data, onsuccess, onerror);
		// });
	};
	EmployeeController.prototype.index = function(
		$scope,
		$rootScope,
		$idbw,
		EmployeesResourceService,
		CountryIndexdbService,
		CountryResourceService
	) {
		var vm_employee = this;

		$scope.$watch(function() {
			return navigator.onLine;
		}, function(newValue, oldValue) {
			console.log(newValue);
			console.log(oldValue);
		});

		vm_employee.lstemployee =
			vm_employee.onClickAdd = function() {
				fillIDBWrapper(EmployeesResourceService);
			};
		vm_employee.onClickDelete = function() {
			fillIDBWrapper(EmployeesResourceService);
		};
		vm_employee.onClickWrapper = function() {
			console.log(CountryIndexdbService.getCountries());
			vm_employee.list = CountryIndexdbService.getCountries().then(function(data){
				console.log("---data---");
				console.log(data);
			});
			// CountryResourceService.query().$promise.then(function(data) {
			// 	console.log(data);
			// });
		};
	};
	return EmployeeController;
}());
var employeeController = new EmployeeController();
