

const name = "Shobhag Jangid"

// Const only call one time it can not be cahnged 
// in modern js we will not use var due to {scope } wise 

var DOB = "27-07-1995"
let height = "5'8"
let marrietalStatus = "Married"
let Children = "1"


// basic console
console.log({name, height, marrietalStatus, Children, DOB});

// Datable in table including there name

console.table({name, height, marrietalStatus, Children, DOB});

// Data in table including there ID

console.table([name, height, marrietalStatus, Children, DOB]);
    
