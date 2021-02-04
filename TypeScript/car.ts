export class Car {

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