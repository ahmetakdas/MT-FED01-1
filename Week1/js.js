var a = 10;
var b = a;
b = a + 20;

console.log(a);
console.log(b);

var c = { amount: 30 };
var d = c;
c.amount = c.amount + 20;

console.log(c);
console.log(d);

function amount() {
	var total = 0;
	for (var i = 0; i < arguments.length; i++) {
	  total = total + arguments[i];
	}
	return total;
}

console.log(amount(1,5,7,9));

function arr(array){
	for(i = 0; i < array.length; i++){
		console.log(array[i]);	
	}
}

arr([10,5,2,"haha"]);

