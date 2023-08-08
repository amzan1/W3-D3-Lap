// let t=15;
// function sum(num ,num1){
// t=num+num1
// return t
// }
// console.log(t);
// console.log(sum(1,2));
// console.log(t);

////////////////////////////////////
// arrow functions
////////////////////////////////////
const sum = (num1 , num2) =>{
return num1+num2
}
const min = (num1 ,num2) =>{
    return num1-num2

}
console.log(sum(1,2))
console.log(min(2,2))

////////////////////////////////////
// function
////////////////////////////////////

function mul(num1 ,num2){
    return num1*num2
}
console.log(mul(1,2))
function div(num1 ,num2){
    return num1/num2
}
console.log(div(5,2))

////////////////////////////////////
// filter array 
////////////////////////////////////
// print even number
let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const evenum = number.filter(function(i) {
    return i % 2 === 0
});
console.log(evenum);

// print odd number

const oddnum = number.filter(function(i) {
    return i % 2 != 0
});
console.log(oddnum);

////////////////////////////////////
// find array 
////////////////////////////////////
const firstnum= number.find(function(x){
    return x%2==0;
});
console.log(firstnum);

////////////////////////////////////
// forEach 
////////////////////////////////////

const f= number.forEach(function(x,i){
    number[i]=x*2
})
console.log(number)

////////////////////////////////////
// includes
////////////////////////////////////

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(num.includes(19));
console.log("////////////////////////////////////");


////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

const characters = [
    {
        name: "Luke Skywalker",
        height: 1.77,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 1.6,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 1.8,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 2.22,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "kevien",
        height: 1.06,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];
////////////////////////////////////
console.log("1-Get first name that has blue eyes"+"\n")
////////////////////////////////////
const firstname= characters.find(function(x){
return x.eye_color==="blue"
})
console.log(firstname.name);
console.log("////////////////////////////////////");

////////////////////////////////////
console.log("2-Get first gender that is his mass is over 50"+"\n")
////////////////////////////////////
const firstgender= characters.find(function(x){
    return x.mass>50
    })
    console.log(firstgender.gender);
    console.log("////////////////////////////////////");

////////////////////////////////////
console.log("3-Get characters with height less than 200"+"\n")
////////////////////////////////////

const hless = characters.filter(function(x) {
    return x.height < 200;
});
console.log(hless);
console.log("////////////////////////////////////");

////////////////////////////////////
console.log("4-Get all male characters"+"\n")
////////////////////////////////////

const male = characters.filter(function(x) {
    return x.gender =="male";
});
console.log(male);
console.log("////////////////////////////////////");

////////////////////////////////////
console.log("5-Get array of all names only"+"\n")
////////////////////////////////////

const allnames = characters.map(function(x) {  
return x.name
})
console.log(allnames) 
console.log("////////////////////////////////////");

////////////////////////////////////
console.log("6-Get array of all heights only"+"\n")
////////////////////////////////////

const allheights = characters.map(function(x) {  
    return x.height
})
console.log(allheights) 
console.log("////////////////////////////////////");

////////////////////////////////////
console.log("7-Sort by mass (low to high)"+"\n")
////////////////////////////////////

const sortMass = characters.sort(function(a,b) {  

    return a.mass-b.mass
})
console.log(sortMass) 
console.log("////////////////////////////////////");

////////////////////////////////////
console.log("8-Sort by height (high to low)"+"\n")
////////////////////////////////////

const sortHeight = characters.sort(function(a,b) {  
    return b.height- a.height
})
console.log(sortHeight) 
console.log("////////////////////////////////////");
////////////////////////////////////
console.log("9-Does every character have mass more than 40?"+"\n")
////////////////////////////////////
const moreMass =characters.every(function(x){
    return x.mass > 40
})
console.log(moreMass) 
console.log("////////////////////////////////////");
////////////////////////////////////
console.log("10-Is every character shorter than 200?"+"\n")
////////////////////////////////////
const shorter =characters.every(function(x){
    return x.height < 200
})
console.log(shorter) 
console.log("////////////////////////////////////");
////////////////////////////////////
console.log("11-Is there at least one character with blue eyes?"+"\n")
////////////////////////////////////
const blue_eyes =characters.some(function(x){
    return x.eye_color=="blue"
})
console.log(blue_eyes) 
console.log("////////////////////////////////////");
////////////////////////////////////
console.log("12-Is there at least one character taller than 210?"+"\n")
////////////////////////////////////
const taller =characters.some(function(x){
    return x.height>210
})
console.log(taller) 
console.log("////////////////////////////////////");
