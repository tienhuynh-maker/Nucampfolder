class Student{
    constructor(name, email, community){
        this.community = community; 
        this.email = email;
        this.name =  name;
    }
}

class Bootcamp{
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
}

    registerStudent(studentToRegister){
        if (this.students.filter(stu => stu.email === studentToRegister.email).length === 0){
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name} course.`);
        }
        else
            console.log(`${studentToRegister.name} seems that you have already been registered to ${this.name} course.`);
    
        return this.students;
    }
}

const bob = new Student("Bob", "bob.yahoo.com", "NuCamp");
console.log(bob);
const tom = new Student("Tom", "tom.yahoo.com", "NuCamp");
console.log(tom);

const webDevelopment = new Bootcamp("Web Development", "Beginner");
console.log(webDevelopment);

webDevelopment.registerStudent(bob);
webDevelopment.registerStudent(tom);
console.log(webDevelopment.students);
webDevelopment.registerStudent(bob);