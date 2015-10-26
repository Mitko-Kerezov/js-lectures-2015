// // Task 01
// function sumSquaresOfOddArgs() {
// 	return [].slice.call(arguments)
// 			.reduce(function(accum, current) {
// 				var result = accum;
// 				if (current%2) {
// 					result = accum + current*current;
// 				}

// 				return result;
// 			}, 0);
// };

// // Task 01
// console.log(sumSquaresOfOddArgs(1, 2, 3, 4, 5, 6));

// // Task 02
// function sum(a, b) {
// 	if (b) {
// 		return a + b;
// 	} else {
// 		return function(c) {
// 			return a + c;
// 		}
// 	}
// };

// // Task 02
// var partialSum = sum(5);
// console.log(partialSum)
// console.log(partialSum(10))
// console.log(sum(5)(2))

// Task 03
// function curry(func) {
// 	var oldArgs = [].slice.call(arguments, 1);
// 	return function () {
// 		var args = oldArgs.concat([].slice.call(arguments));
// 		if (args.length < func.length) {
// 			return curry.apply(null, [func].concat(args));
// 		}

// 		return func.apply(null, args);
// 	};
// };

// // Task 03
// var curried = curry(function (a, b, c, d) {
//   return a + b + c + d;
// });

// console.log(curried(6, 6, 6, 6));
// console.log(curried(6, 6));
// console.log(curried(6, 6)(6, 6));
// console.log(curried(6)(6)(6)(6));
// console.log(curried(6, 6, 6)(6));

// // Task 04
// function sequence() {
// 	var functions = [].slice.call(arguments);
// 	return function(arg) {
// 		var result;
// 		functions.forEach(function(f) {
// 			result = f.apply(null, [arg]);
// 		})

// 		return result;
// 	}
// };

// // Task 04
// var toNumber = sequence(parseFloat, Math.round);
// console.log(toNumber('66.7'))

// // Task 05
// function compose() {
// 	var functions = [].slice.call(arguments).reverse();
// 	return function(arg) {
// 		var result;
// 		functions.forEach(function(f) {
// 			console.log(f);
// 			result = f.apply(null, [arg]);
// 		})

// 		return result;
// 	}
// };

// // Task 05
// var toNumber = compose(Math.round, parseFloat);
// console.log(toNumber('66.7'))

// // Task 06
function cons(a, b) {
	return function(fn) {
		return fn.apply(null, [a, b]);
	};
}

// // Task 06
// var pair = cons(1, 2);
// console.log(pair(function(a, b) {
// 	return a + b;
// }));

// // Task 07
function car(pair) {
	return pair(function(a, b) {
		return a;
	})
}

// Task 07 - Uncomment Task 06 also!
// console.log(car(cons(1, 2)))

// // Task 08
function cdr(pair) {
	return pair(function(a, b) {
		return b;
	})
}

// // Task 08 - Uncomment Task 06 also!
// console.log(cdr(cdr(cons(1, cons(2, 3)))))

// // Task 09 - Uncomment Task 06 also!
function forEach(list, fn) {
	// Assuming there are no functions inside the list
	// Homework assignment restriction
	var first = car(list),
		second = cdr(list);

	if (typeof first !== "function") {
		fn.call(null, first);
	} else {
		forEach(first, fn);
	}

	if (typeof second !== "function") {
		fn.call(null, second);
	} else {
		forEach(second, fn);
	}
}

// // Task 09 - Uncomment Task 06, 07 and 08 also!
var log = console.log.bind(console);
// var list = cons(1, cons(2, cons(3, cons(4, 5))));
// forEach(list, log);

// Task 10
function map(list, fn) {
	if (typeof cdr(list) === "function") {
		return cons(fn(car(list)), map(cdr(list), fn));
	} else if (typeof cdr(list) === "function") {
		return cons(map(car(list), fn), fn(cdr(list)));
	}

	return cons(fn(car(list)), fn(cdr(list)))
}

var list = cons(1, cons(2, cons(3, cons(4, 5))));
var mapped = map(list, function (el) {
	return el * el;
});

forEach(mapped, log);