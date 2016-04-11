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
		this.initidbw.$inject = [
			"$idbwProvider",
		];
		angular.module("pos", [
				"idb",
				"rest",
			])
			.config(this.initidbw);
	}

	Pos.prototype.initidbw = function($idbwProvider) {

	};

	return Pos;
}());

var pos = new Pos();
