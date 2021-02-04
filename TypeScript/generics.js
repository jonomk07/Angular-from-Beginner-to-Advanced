// In TypeScript, Generics are basically a kind of tool that enables you to create reusable 
// code components that work with a number of types instead of a single type.
function result(x) {
    return x;
}
var y = result(5);
console.log(y);
function result2(x) {
    return x;
}
var z = result2('Hello');
console.log(result2);
// <T> define type 
// (x:T) define type of value to get 
// :T define type of valu to return
function result3(x) {
    return x;
}
var t = result3(10);
console.log(t);
var v = result3('Hello Jono');
console.log(v);
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.y = function (parameter) {
        return parameter;
    };
    return GenericClass;
}());
var a = new GenericClass();
a.y('t');
