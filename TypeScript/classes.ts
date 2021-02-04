class Car {

    // private brand: string; can't be use outside the Car class
     brand: string;
    model: string;
    color: string;
    yearManufacture:number;

    constructor(brand: string, model: string, color: string ,yearManufacture:number){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.yearManufacture = yearManufacture;
    }
    
    years(){
        console.log(this.yearManufacture);
    }
}

let car =  new Car('BMW','M3', 'red',2020);
console.log(car.brand +' '+ car.color);


class Person {

    protected name: string;

    // access private variables
    private email: string;

    get mail(){

        return this.email;
    }

    set mail(email){
       this.email = email;
    }

    save(){
        console.log(' Registration Successful');
    }
}

class Customer extends Person {

    sale(){
         this.name;
        console.log(' X items sold');
    }
}

class Employee  extends Person {
    salary(){
    
        console.log(' Salary paid ')
    }
}

let person = new Person;
person.save;

let customer = new Customer;
customer.sale;


let employee = new Employee;

employee.salary;
employee.save;