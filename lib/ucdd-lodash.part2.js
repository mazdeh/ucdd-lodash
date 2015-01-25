/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end) {
	var result = [];
	if (end === undefined) {
		end = start;
		start = 0;
	}
	for (var s = start; s < end; s++){
		result.push(s)
	}
    return result
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) {
	var result = {};

	if (propertyNames === undefined) {
		return result
	}

	for (var i = 0; i < propertyNames.length; i++) {
		result[propertyNames[i]] = object[propertyNames[i]]
	}

	return result
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {
	var result = false;

	for (var obj = 0; obj < collection.length; obj++) {  
    	object = (collection[obj])
    
	    result = predicate(object)
	    if (result === true) {
	    	return result
	    }
	}
    return result
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {
	var result = false;

	for (var obj = 0; obj < collection.length; obj++) {  
	    object = (collection[obj])
	    
	    result = predicate(object)
	    if (result === false) {
	    	return result
	    }
	}
    return result
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) {
	
	var answer = false;
	var count = 0;
	var element = 0;

	for (var obj = 0; obj < collection.length; obj++) {  
	    element = collection[obj]
	    count = 0;

	    for (var prop in object) {
	    	if (element[prop] !== object[prop]) {
	    		break
	    	} else {
	    		count++;
	    	}
	    }

	    if (count === Object.keys(object).length) {
	    	answer = element;
	    	return answer
	    }
	}
    return answer
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib