//= require idbwrapper

//= require angular/rest
//= require angular/idb

var Pos = (function() {
	'use strict';

	function Pos(args) {
		// enforces new
		if (!(this instanceof Pos)) {
			return new Pos(args);
		}
		this.dexie.$inject = [
			"$dexieProvider",
		];
		angular.module("pos", [
				"idb",
				"rest",
			])
			.config(this.dexie);
	}

	Pos.prototype.dexie = function($dexieProvider) {
		console.log($dexieProvider);
		$dexieProvider.create();
		// $dexieProvider.version(1);
	};

	return Pos;
}());

var pos = new Pos();
