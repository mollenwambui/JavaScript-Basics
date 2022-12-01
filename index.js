let numbs=[2,3,4,5,6]
let double=numbs.map(item=>item*item)
console.log(double)


const numbers=[65,44,12,4]
var arryy=numbers.map(multiply)
function multiply(num){
    return num *10
}
console.log(arryy)


let person=(age,stream)=>{
    console.log(age ,stream)
}
person(20,"AdaLab")


let nums=[2,3,4,5,6]
let even=nums.filter(item=> item%2==0);
console.log(even)



let persons={
    name:'Mollen',
    age:21,
    nationality:'Kenyan',
    career:'Big data'
}
persons["weight"]=49;
persons["Height"]=163;
persons["School"]='AkiraChix'
persons["Hobbies"]=function(){ return "I love coding in python " }
console.log(persons)
console.log(persons.age)
console.log(persons.Hobbies())
Object.assign(persons,{gender:'Female',race:'African',status:'Married'})
console.log(persons)
let people=Object.create(
   persons
)
console.log(people)
Object.freeze(persons) 
 
Object.seal()