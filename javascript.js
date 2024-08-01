
function work(name, age){
    this.age = age
    this.name = name
}

let one = new work('Ayush', 94)
work.prototype.play = function(){
    return this.name
}
work.prototype.setName = function(some){
    this.name = some
}
console.log(one.play())
one.setName('Kammerr')
console.log(one)

let info=new work("rsjiv",20);
info.play =function(){
    return ({name:this.name ,age:this.age})
}

console.log(info.play())