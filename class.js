class Student{
    constructor(name,age,nationality){
        this.name=name
        this.age=age
        this.nationality=nationality

    }
}
let firstStudent=new Student("Joy",20,"Kenyan")
Student.prototype.gender='Female'
let secondStudent=new Student('Mollen',21,'Dubai')
Student.prototype.hobby=()=>'I love coding';
console.log(secondStudent.gender)
console.log(firstStudent.hobby())
function Student(name,age,nationality){
    this.name=name
    this.age=age
    this.nationality=nationality

}
Student.prototype.country="Kenya"
 let thirdStudent=new Student("Lucy",19,"Singapore")
 console.log(thirdStudent)
 

























 