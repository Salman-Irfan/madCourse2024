// const stu1 = {
//     name: 'abc',
//     age: 12,
//     email: "abc@gmail.com"
// }

class Student {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const stu1 = new Student(`abc`, 18, `abc@gmail.com`);
console.log(stu1)