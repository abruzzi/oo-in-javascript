var LineItem = function (name, price, amount, unit) {
	this.name = name;
	this.price = price;
	this.amount = amount;
	this.unit = unit;	
}

LineItem.prototype.totalPrice = function() {
	return this.price * this.amount;	
}

LineItem.prototype.format = function() {
	return "名称：" + this.name + 
	"，数量："+this.amount + this.unit + 
	"，单价："+this.price.toFixed(2)+"（元）"+
	"，小计："+ this.totalPrice()+"（元）";
}

var apple = new LineItem("苹果", 15.00, 2, "市斤");

console.log(apple.totalPrice());//15 
console.log(apple.format());//名称：苹果，数量：1市斤，单价：15.00（元），小计：15（元）

var apple = new LineItem("苹果5s", 4680.00, 1, "台");

console.log(apple.totalPrice());
console.log(apple.format());

var apple = new LineItem("苹果5s", 4680.00, 1, "台");

console.log(apple.totalPrice());
//4680

console.log(apple.format());
//名称：苹果5s，数量：1台，单价：4680.00（元），小计：4680（元）

var ShoppingCart = function() {
	this.collection = [];
}

ShoppingCart.prototype.add = function(item) {
	this.collection.push(item);
}

ShoppingCart.prototype.count = function() {
	return this.collection.length;
}

ShoppingCart.prototype.remote = function(item) {
	this.collection.delete(item);
}

var myCart = new ShoppingCart();
myCart.add(apple);
myCart.add(apple);
myCart.add(apple);

console.log(myCart.count());
//3


