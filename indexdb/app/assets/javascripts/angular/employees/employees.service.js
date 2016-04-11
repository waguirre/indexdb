var EmployeesService = (function() {
	'use strict';

	function EmployeesService(args) {
		// enforces new
		if (!(this instanceof EmployeesService)) {
			return new EmployeesService(args);
		}

		this.resource.$inject = ["$resource"];
		this.countryresource.$inject = ["$resource"];
		this.countryindexdb.$inject = [
			"$q",
			"$http",
			"$idbw",
			"CountryResourceService",
		];

		angular.module("pos.employees.service", [
				"ngResource",
			])
			.service("EmployeesResourceService", this.resource)
			.service("CountryResourceService", this.countryresource)
			.service("CountryIndexdbService", this.countryindexdb);
		// constructor body
	}

	EmployeesService.prototype.resource = function($resource) {
		return $resource("/api/v1/employees/:id", { id: "@id" });
	};

	EmployeesService.prototype.countryresource = function($resource) {
		return $resource("//jsonplaceholder.typicode.com/posts", {}, {
			query: {
				headers: { "Content-Storage": "Offline" },
				isArray: true,
			}
		});
	};

	EmployeesService.prototype.countryindexdb = function($q, $http, $idbw, CountryResourceService) {
		return {
			getCountries: function() {
				return $q(function(resolve, reject) {
					CountryResourceService.query(function(data, status, variable) {
						var resultheader = status();
						if (Object.keys(resultheader).length === 0) {
							var onsuccess = function(data) {
								return resolve(data);
							};
							var onerror = function(error) {
								return reject(error);
							};
							$idbw.employee.getAll(onsuccess, onerror);
						} else {
							$idbw.employee.clear();
							$idbw.employee.put(data);
							return resolve(data);
						}
					}, function(data, error, test) {
						return reject(data);
					});
				});

				// var deferred = $q.defer();

				// if (navigator.onLine) {
				// 	CountryResourceService.query(function(data, status, variable) {
				// 		var resultheader = status();
				// 		if (Object.keys(resultheader).length === 0) {
				// 			var onsuccess = function(data) {
				// 				return deferred.resolve(data);
				// 			};
				// 			var onerror = function(error) {
				// 				return deferred.reject(error);
				// 			};
				// 			$idbw.employee.getAll(onsuccess, onerror);
				// 		} else {
				// 			$idbw.employee.clear();
				// 			$idbw.employee.put(data);
				// 			return deferred.resolve(data);
				// 		}
				// 	}, function(data, error, test) {
				// 		return deferred.reject(data);
				// 	});
				// }


				// return deferred.promise;
			},
		};
	};

	return EmployeesService;
}());

var employeesservice = new EmployeesService();
