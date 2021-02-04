var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model, color, yearManufacture) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.yearManufacture = yearManufacture;
    }
    Car.prototype.years = function () {
        console.log(this.yearManufacture);
    };
    return Car;
}());
var car = new Car('BMW', 'M3', 'red', 2020);
console.log(car.brand + ' ' + car.color);
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "mail", {
        get: function () {
            return this.email;
        },
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.save = function () {
        console.log(' Registration Successful');
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        this.name;
        console.log(' X items sold');
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log(' Salary paid ');
    };
    return Employee;
}(Person));
var person = new Person;
person.save;
var customer = new Customer;
customer.sale;
var employee = new Employee;
employee.salary;
employee.save;
