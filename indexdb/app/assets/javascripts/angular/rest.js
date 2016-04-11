var Rest = (function() {
	'use strict';

	function Rest(args) {
		// enforces new
		if (!(this instanceof Rest)) {
			return new Rest(args);
		}
		this.config.$inject = [
			"$httpProvider",
		];
		angular.module("rest", [])
			.config(this.config);
	}
	Rest.prototype.config = function(
		$httpProvider
	) {
		var handlerOnCallback = function(response) {
			switch (response.status) {
				case 220:
					// _AppWeb.Common.Message.GenericInsert();
					break;
				case 221:
					// _AppWeb.Common.Message.GenericUpdate();
					break;
				case 222:
					// _AppWeb.Common.Message.GenericUpdate();
					break;
				case 225:
					toastr.success(response.data);
					break;
				case 404:
					toastr.error('No se ha encontrado la ruta..... comuniquese con su administrador(!)');
					break;
				case 405:
					toastr.error('Formato de requisición incorrecto..... comuniquese con su administrador(!)');
					break;
				case 400:
					toastr.error('No se ha solicitado correctamente la ruta..... comuniquese con su administrador(!)');
					break;
				case 500:
					if (response.data.ExceptionMessage) {
						toastr.error(response.data.ExceptionMessage);
					} else if (response.data) {
						toastr.error(response.data);
					} else {
						toastr.error(response);
					}
					break;
				case 401:
					if (response.data) {
						toastr.error(response.data);
					} else {
						toastr.error(response);
					}
					window.location.href = '/';
					break;
					/*case 302:
						window.location.href = '/';
						break;*/
				default:
					break;
			}
		};
		$httpProvider.interceptors.push(function($q, $rootScope) {
			if ($rootScope.activeCalls == undefined) {
				$rootScope.activeCalls = 0;
			}
			return {
				request: function(config) {
					$rootScope.activeCalls += 1;
					config.headers = config.headers || {};
					// config.headers.UserCultureInfo = "en-US"; // _AppWeb.Config.CultureInfo;
					// console.log(config.headers);
					return config;
				},
				requestError: function(rejection) {
					$rootScope.activeCalls -= 1;
					return rejection;
				},
				response: function(response) {
					$rootScope.activeCalls -= 1;
					// console.log("--response--");
					// console.log(response);
					handlerOnCallback(response);
					return response;
				},
				responseError: function(rejection) {
					$rootScope.activeCalls -= 1;
					// console.log("--rejection--");
					// console.log(rejection);
					handlerOnCallback(rejection);
					return rejection;
				}
			};
		});
	};
	return Rest;
}());
new Rest();
