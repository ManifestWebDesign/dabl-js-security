'use strict';

angular.module('dablJs.security')

.service('jsSHA', function() {
	if (typeof jsSHA === 'undefined') {
		throw new Error('jsSHA is not included');
	}

	return jsSHA;
});