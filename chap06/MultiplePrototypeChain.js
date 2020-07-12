var Grade = function(){
    var args = Array.prototype.slice.call(arguments);
    for(var i=0;i< args.length;i++){
        this[i]= args[i];
    }
    this.length = args.length;
}
Grade.prototype = [];

var g = new Grade(100, 80);

// 인스턴스에서 배열메서드 사용할 수 있도록 설정


