function Dog(name, type) {
	this.name = name;
	this.type = type;
	this.sound = sound;
}

function sound(val) {
	console.log(val);
}

var xiaobu = new Dog('小布', '拉布拉多');
var erhuo = new Dog('傻子', '哈士奇');

xiaobu.sound === erhuo.sound;