// interface in typesscript are basically a type definition  or interface  defining object type 
function save(person) {
    console.log(person.username + ' ' + 'was registred');
}
save({ username: 'Jono', email: 'Jono@jono.com', password: '123' });
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    return Person2;
}());
var person2 = new Person2();
person2.username;
function save2(person2) {
    console.log(person2.username + '' + ' Was registred');
}
save2(person2);
