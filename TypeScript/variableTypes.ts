let x:string;
x='Hellp Jono';

let y:15;

let isConnect:boolean;
isConnect=true;
isConnect=false;


let countries:string[]= ['Russia', 'Congo', 'Canada'];
let numbers:Array<number>= [1,2,3,];
let t:[number,string]=[1,'Hi Jono'];

let a:any;
a=5;
a='Jono';
a=true;

// you can define the numbers you want 
enum colors {red=1,green=6,blue};
let red=colors.red;
let green=colors.green;
let blue=colors.blue;

function greeter(){
    console.log('Hello');
}

let b:number;
b+5;

class Product {

}

let greet;
greet = 'Hello';

let count =  (<string>greet).length;

let count2= (greet as string).length;