//= require idbwrapper
var IDB = (function() {
	'use strict';

	function IDB(args) {
		// enforces new
		if (!(this instanceof IDB)) {
			return new IDB(args);
		}
		angular.module("idb", [])
			.provider('$idbw', this.idbw)
			.provider('$dexie', this.dexie);
	}
	IDB.prototype.idbw = function() {
		var dbEmployee;
		var idbw = (function() {
			var idbw = {
				employee: new IDBStore({
					storeName: 'employees',
					storePrefix: 'smb-',
					dbVersion: 0.1,
					// keyPath: 'id',
					// autoIncrement: true,
					// indexes: [],
					onStoreReady: function() {},
					onError: function(error) {
						throw error;
					},
				})
			};
			return idbw;
		}());
		return {
			$get: function() {
				return idbw;
			},
		};
	};
	IDB.prototype.dexie = function() {
		var db;

		function create() {
			db = new Dexie("smb-pos");
		}
		return {
			$get: function() {
				return db;
			},
			create:create,
		};
	};

	return IDB;
}());
var idb = new IDB();
