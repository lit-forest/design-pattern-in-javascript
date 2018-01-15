// 工厂模式
// 把创建实例的过程延迟到子类，已保证工厂方法 Chart 的可扩展性
function Factory() {
	const productFactory = {
		line: function () {
			this.type = '折线图';
		},
		pie: function () {
			this.type = '饼状图';
		}
	};

	return function Chart(type) {
		return new productFactory[type]()
	}
}

const factory = Factory();
let chart = factory('pie');

console.log(chart);


function createHTMLEl() {
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
	return function create(options) {
		let type = options.type ? options.type.toLowerCase() : undefined;

		if (!type || !controls[type]) {
			throw {
				message: type + ' is not supported.'
			}
		}

		return controls[type](options);
	}

}

var create = createHTMLEl();

let text = create({ type: 'text', value: 'hello world' })

let checkbox = create({ type: 'checkbox', checked: true })

document.body.appendChild(text);
document.body.appendChild(checkbox);


