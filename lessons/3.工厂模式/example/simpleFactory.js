// 简单工厂模式
// 在工厂方法 Chart 方法中直接创建所有的实例产品，
// 缺点在于每次新增产品都要修改 Chart 方法
// 实际产品
function LineChart() {
	this.type = '折线图';
}

function PieChart() {
	this.type = '饼状图';
}
// 工厂方法
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

let chart = new Chart('line');
console.log(chart)



