angular.module('customFilter',[])
.filter('unique', function(){
	return function(data, prop) {
		if (angular.isArray(data) && angular.isString(prop)){
			var results=[];
			var keys={};
			for (var i = 0; i < data.length; i++){
				var val = data[i][prop];
				if (angular.isUndefined(keys[val])){
					keys[val] = true;
					results.push(val);
				}
			}
			return results;
		} else {
			return data;
		}
	}
})