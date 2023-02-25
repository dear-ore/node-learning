class student {
    constructor(name, level, matricNumber){
        this.name = name;
        this.level = level;
        this.matricNumber = matricNumber;
    }

    greetStudent() {
        console.log(`Hello, my name is ${this.name} and I am in ${this.level} level. My reg number is ${this.matricNumber}.`);
    }
}


class subStudent extends student {
    constructor(faculty) {
        super();
        this.faculty = "";
    }
}
// const student1 = new student("Yetunde", 200, "floe");
// console.log(student1);
//student1.greetStudent();
