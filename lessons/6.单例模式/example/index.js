// 单利模式即只创建一个实例对象，在一个项目中utils要么不出现，要么只能出现一个
var utils = {
	formatDate: function () { },
	ajax: function () { },
	curry: function () { }
}

// 高级一点的只创建一个实例，在需要的时候创建
// 懒汉模式
// var getCEO = (function () {
// 	var instance;
// 	var createCEO = function () {
// 		return instance = {
// 			name: '霸道总裁',
// 			age: '35',
// 			sex: 'male'
// 		}
// 	}
// 	return {
// 		getInstance: function () {
// 			return instance || (instance = createCEO())
// 		}
// 	}
// }())

// 饿汉模式
var getCEO = (function () {
	var instance;
	var createCEO = function () {
		return instance = {
			name: '霸道总裁',
			age: '35',
			sex: 'male'
		}
	}
	instance = createCEO();
	return {
		getInstance: function () {
			return instance;
		}
	}
}())