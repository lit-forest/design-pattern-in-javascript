function Animal(type) {
	this.type = type;
}

Animal.prototype.move = function () {
	console.log('I am moving');
}

var animal = new Animal('dog')

console.log(animal.__proto__ === Animal.prototype);    // true
console.log(animal.type);                              // dog
console.log(animal.move())							   // 'I am moving'

console.log(Animal.prototype.constructor === Animal)   // true

console.log(Animal.__proto__ === Function.prototype)  // true

console.log(Animal.prototype.__proto__ === Object.prototype)  // true

function Dog() {

}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

Dog.prototype.__proto__ === Animal.prototype

const newObj = Object.create({ a: 1 }, { b: { value: 1, writable: false, configurable: true } })
console.log(newObj);
console.log(newObj.__proto__);


function Animal(type) {
	this.type = type;
}

Animal.prototype.move = function () {
	console.log('I am moving');
}

function Dog(type) {
	Animal.call(this, type);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('金毛');
console.log(dog.type);
console.log(dog.move());



function MyClass() {
	SuperClass.call(this);
	OtherSuperClass.call(this);
}

// inherit one class
MyClass.prototype = Object.create(SuperClass.prototype);
// mixin another
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// re-assign constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function () {
	// do a thing
};