
// interface in typesscript are basically a type definition  or interface  defining object type 

interface Person {
    username: string;
    password?: string;
    email: string;
}

function save(person: Person){
    console.log(person.username + ' ' + 'was registred');
}

save({username:'Jono', email:'Jono@jono.com', password:'123'});

class Person2 {
    username: string;
    password: string;
    email: string;
}

let person2 = new Person2();

person2.username;

function save2 (person2 : Person2){

    console.log(person2.username + '' + ' Was registred');
}

save2(person2);

// nodemon is like a live-server for your node application. 
// any changes made in your node application will get reflected as server will restart again
// run nodemon interfaces.js