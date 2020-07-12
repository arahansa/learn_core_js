var Person = function(name){
    this.name = name;
};

Person.prototype.getName = function(){
    return this._name;
};

var iu = new Person('지금');
iu.getName = function (){
    return '바로 ' +this.name
};

console.log(iu.getName());
console.log('던더 프로토로 겟네임 호출하면 언디파인트');
console.log(iu.__proto__.getName());

console.log('prototype 에 name 지정해 준 후');
Person.prototype.name= '이지금';
console.log(iu.__proto__.getName());

console.log(iu.__proto__.getName.call(iu));
