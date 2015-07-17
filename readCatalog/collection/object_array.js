var map = {
	"1":"js",
	"2":"mobile",
	"4":"node",
	'6':"php"
};
var arr = [];
var keys = Object.keys(map).sort(function(a,b){
	return a-b;
});

keys.forEach(function(item,i,a){
	arr.push(map[item]);
});
console.log(arr);