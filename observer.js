function Observer() {
}

Observer.prototype.update = function() {
	throw new Error("not implemented");
}

var Subject = function() {
	this.observers = [];
}

Subject.prototype.addObserver = function(observer) {
	this.observers.push(observer);
}

Subject.prototype.notify = function(data) {
	this.observers.forEach(function(observer) {
		observer.update(data);
	});
}

var bbs = Object.create(Observer.prototype);
bbs.update = function(data) {
	console.log(data);
}

var alwayson = Object.create(Observer.prototype);
alwayson.update = function(data) {
	alert(data);
}

var weather = new Subject();

weather.addObserver(bbs);
weather.addObserver(alwayson);

weather.notify("Cloudy in the morning");