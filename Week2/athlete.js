var athlete = 	 {
	name: "Henk"
}

function getName(){
	return athlete.name;	
}

function setName(name){
	athlete.name = name;	
}

console.log(getName());

var atleet = new Object();
Object.defineProperties(atleet, {
	_name : {
		value: "TOm",
		writable: true	
	},
	name : {
		get:function(){
			return this._name;	
		},
		set:function(value){
			this._name = value;
		}
	}
});
atleet.name = "test";
console.log(atleet.name);
