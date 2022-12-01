function greet(name, callback){
    console.log(`Hi ${name}`)
    callback()
}
function callme(){
    console.log('Im callback function')

}
greet('Mollen',callme)


myPromise= new Promise(function(resolve,reject){
    const num1=12
    const num2=20
    if(num1==num2){
        resolve()
    }
    else{
        reject()
    }
}
).then(function(){
    console.log('The numbers are equal')
})
.catch(function(){
    console.log('Promise failed! The numbers are not equal')
}).finally(function(){
    console.log("Today was a good day")
})