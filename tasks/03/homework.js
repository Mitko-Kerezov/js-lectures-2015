// // Task 01
// Array.prototype.myMap = function myMap(func) {
// 	var result = [];
// 	this.forEach(function(e) {
// 		result.push(func(e));
// 	});

// 	return result;
// };

// // Task 01
// console.log([1,2,3,4,5,6,7,8,9].myMap(function(el){ return el + 10; }));

// // Task 02
// var Vehicle = (function Vehicle() {
// 	var cls = function Vehicle_Constructor(mileage) {
// 		this.mileage = mileage;
// 		this.mileage.val = this.mileage.val || 0;
// 	}


// 	cls.prototype.getMileage = function getMileage() {
// 		return this.mileage.val;
// 	};

// 	cls.prototype.toString = function toString() {
// 		return "This Vehicle Mileage is " + this.getMileage();
// 	};

// 	return cls;
// })();

// var Car = (function Car() {
// 	var cls = function Car_Constructor(brand, consumption) {
// 		this.brand = brand;
// 		this.consumption = consumption;
// 	}

// 	cls.prototype = new Vehicle({ val: 0 });

// 	cls.prototype.drive = function drive(miles) {
// 		this.mileage.val += miles;
// 	};

// 	cls.prototype.getBrand = function getBrand() {
// 		return this.mileage.brand;
// 	};

// 	cls.prototype.getConsumption = function getConsumption() {
// 		return this.mileage.consumption;
// 	};

// 	return cls;
// })();

// // Task 02
// var v = new Vehicle({val: 5});
// console.log(v.getMileage(), v.toString());
// var c1 = new Car('honda', 5);
// console.log(c1.getMileage()); // -> 0
// console.log(c1.toString()); // -> This Vehicle mileage is 0
// c1.drive(1000);
// console.log(c1.getMileage()); // -> 1000
// console.log(c1.toString()); // -> This Vehicle mileage is 1000

// // Task 03
// var Point = (function Point() {
// 	var cls = function Point_Constructor(x, y) {
// 		this.x = x;
// 		this.y = y;
// 	}

// 	cls.prototype.toString = function toString() {
// 		return this.x + ", " + this.y;
// 	};

// 	cls.prototype.toArray = function toArray() {
// 		var that = this,
// 			result = [];

// 		Object.keys(this).forEach(function(key) {
// 			result.push(that[key]);
// 		});

// 		return result;
// 	};

// 	return cls;
// })();

// var Point3D = (function Point3D() {
// 	var cls = function Point3D_Constructor(x, y, z) {
// 		Point.call(this, x, y)
// 		this.z = z;
// 	};

// 	cls.prototype = Object.create(Point.prototype);
	
// 	cls.prototype.toString = function toString() {
// 		return Point.prototype.toString.call(this) + ", " + this.z;
// 	};

// 	return cls;
// })();

// // Task 03
// var pt = new Point(3, 4);
// console.log(pt.toString());
// console.log(pt.toArray());
// var pt3D = new Point3D(3, 4, 5);
// console.log(pt3D.toString());
// console.log(pt3D.toArray());

// Task 04
var FMIjs = (function FMIjs() {

	var BinaryHeap = function BinaryHeap_constructor(list) {
		this.items = list || [];
	}

	BinaryHeap.prototype = Object.create(Array.prototype);

	BinaryHeap.prototype.isEmpty = function isEmpty() {
		return !this.items.length;
	}

	BinaryHeap.prototype.insert  = function insert(item) {
		this.items.push(item);
		return this.items.toString();
	}

	return {
		BinaryHeap: BinaryHeap
	}
})();

// WIP
var bh = new FMIjs.BinaryHeap();
console.log(bh.insert(5));
