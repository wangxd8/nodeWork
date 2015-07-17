
function Person(name,age){
	this.name = name;
	this.age = age;

}

var prototype = Person.prototype;
prototype.say = function(content){
	console.log('%s say: %s',this.name,content);
}

function Teacher(){
	Person.apply(this,arguments);
}
Teacher.prototype = new Person();
Teacher.prototype.speakLession = function(lession){
	console.log('%s 讲：%s',this.name,lession);
}
var zry = new Teacher("张老师",18);
zry.say("我18");
zry.speakLession("node");
var xm = new Person("xiaoming",22);
xm.say("我长大了!");


