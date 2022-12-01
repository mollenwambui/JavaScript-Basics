// Removing the whitespace at the end
 let cities=['Nairobi ','Kisumu ','Mombasa ','Eldoret ']
 var trimmedcities=cities.map(item =>item.trim())
console.log({trimmedcities})

// Converting miles to kilometers
 const miles=[6,12,34,67,8,9,34,89,54]
 let kilometers=miles.map(distance => distance*1.609344)
console.log({kilometers})


// using filter
const numbers=[3,12,67,80,64,87,156]
numbers.filter(function(a){
    if(a%2==0){
        console.log(a)
    }
})

array.forEach(element => {
    
});

