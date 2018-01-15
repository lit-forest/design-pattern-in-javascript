### Simple Factory Pattern Intro 
简单工厂模式的定义为定义一个工厂类，它可以根据参数的不同返回不同类的实例；简单工厂模式不属于GOF 23个经典设计模式之一，它的设计思想很简单，其基本流程如下：
* 将需要创建的各种不同类型的对象的相关代码封装到不同的类中，这些类称为具体产品类
* 提供一个工厂方法用来创建产品，该方法可以根据所传入的参数不同创建不同的具体产品对象
* 客户端调用工厂方法并传入相应的参数

### Simple Factory Pattern Example
* 封装产品生产
``` js
function LineChart() {
	this.type = '折线图';
}

function PieChart() {
	this.type = '饼状图';
}
```
* 创建工厂方法
``` js
function Chart(type) {
	let chart;
	switch (type) {
		case 'line':
			chart = new LineChart();
			break;
		case 'pie':
			chart = new PieChart();
			break;
		default:
			break;
	}
	return chart;
}
```
* 传入不同的参数生产产品
``` js
let chart = new Chart('line');
```

### Factory Pattern Intro
工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类，该模式使类色实例化延迟到子类，而子类可以重写接口方法以便创建的时候制定自己的对象类型。换句更加通俗易懂的话来说就是：事先定义好每条流水线，每条流水线生产的东西是不一样的，然后工厂统一管理流水线，工厂通过订单类型来决定生产何种产品。

### Factory Pattern Example
我们通过一个创建dom节点的例子，来看一下什么是工厂模式，以及工厂模式的工作流程：
* 预定义工厂流水线
``` js
function createInput(type) {
	let el = document.createElement('input');
	el.type = type;
	return el;
};
const controls = {
	text: function (options) {
		let el = createInput(options.type);

		if (typeof options.value != 'undefined') {
			el.value = options.value;
		}
		return el;
	},
	checkbox: function (options) {
		let el = createInput(options.type);

		if (typeof options.checked != 'undefined') {
			el.checked = options.checked;
		}
		return el;
	}
};
```
* 工厂统一管理流水线
``` js
function create(options) {
	let type = options.type ? options.type.toLowerCase() : undefined;

	if (!type || !controls[type]) {
		throw {
			message: type + ' is not supported.'
		}
	}

	return controls[type](options);
}
```
* 根据订单生产指定产品
``` js
let text = create({ type: 'text', value: 'hello world' })
```