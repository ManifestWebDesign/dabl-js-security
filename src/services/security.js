'use strict';
/*global jsSHA: false */
angular.module('dablJs.security')
.factory('dablSecurity', [
	'jsSHA',
function(
	jsSHA
){
	var obj = {};

	obj.getHMAC = function(skey, content){
		var hasher = new jsSHA('SHA-512', 'TEXT');
		hasher.setHMACKey(skey, 'TEXT');
		hasher.update(content);
		return hasher.getHMAC('HEX');
	};

	obj.getHash = function(content, type) {
		type = type || 'SHA-512';
		var hasher = new jsSHA(type, 'TEXT');
		hasher.update(content);
		return hasher.getHash('HEX');
	};

	obj.encode64 = function(d) {
		return btoa(d);
	};

	obj.decode64 = function(d) {
		return atob(d);
	};

	return obj;
}]);
