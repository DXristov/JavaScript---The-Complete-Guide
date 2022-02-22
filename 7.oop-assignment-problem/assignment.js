class Course {
    #lenght;

        get lenght(){
            return 'hours' + this.#lenght;
        }
        set lenght(value){
            if(value < 0){
                throw 'Invalid value';
            }
            this.#lenght = value;
        }

    constructor(title, lenght, price){
        this.title = title;
        this.lenght = lenght;
        this.price = price;
    } 
    calculatePricePerHour(){
        let pricePerHour = 0;
        pricePerHour = this.#lenght / this.price;
        return pricePerHour;
    }
    courseSummary(){
        console.log(`The course name is ${this.title}. The price is ${this.price}$ and the duration is ${this.lenght}hours. The price per hour ratio is ${this.calculatePricePerHour()}`);
    }
}

let jsCourse = new Course('JS', 50, 10);
let cssCourse = new Course('CSS', 20, 5);

console.log(jsCourse, cssCourse);
console.log(jsCourse.calculatePricePerHour());
console.log(cssCourse.calculatePricePerHour());
jsCourse.courseSummary();
cssCourse.courseSummary();

class TheoriticalCourse extends Course {
    constructor(title, lenght, price, numOfExcersises){
        super(title, lenght, price);
        this.numOfExcersises = numOfExcersises;
    }
}

let reactCourse = new TheoriticalCourse('React', 60, 15, 10);
console.log(reactCourse.calculatePricePerHour());
reactCourse.courseSummary();

class PracticalCourse extends Course {
    publish(){
        console.log('Working!');
    }
}

let typeScriptCourse = new PracticalCourse('TypeScript', 80, 40);
console.log(typeScriptCourse.calculatePricePerHour());
typeScriptCourse.courseSummary();
typeScriptCourse.publish();