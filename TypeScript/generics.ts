// In TypeScript, Generics are basically a kind of tool that enables you to create reusable 
// code components that work with a number of types instead of a single type.

 function result(x:number):number{
     return x;
 }
  let y = result(5);
  console.log(y);

function result2(x:string):string{
    return x;
}

let z = result2('Hello');
console.log(result2);


// <T> define type 
// (x:T) define type of value to get 
// :T define type of valu to return

function result3 <T>(x:T):T{
    return x;
}

let t=result3<number>(10);
console.log(t);

let v=result3<string>('Hello Jono');
console.log(v);

class GenericClass<T>{
    variable:T;

    y( parameter:T): T {
        return parameter;
    }
}

let a= new GenericClass<string>();
a.y('t');