/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums =  [3, 5, 7, 9, 11 ]
const squared = nums.map(function(num){
    return num * num; 
}
)
console.log(squared);

const cubed = nums.map(num => num*num*num )
console.log(cubed);

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/
const names = ["jack" , "peter", "arjun", "bella"]

const capitalized = names.map((name)=> name[0].toUpperCase() + name.slice(1) )
console.log(capitalized)

const magicTreeHouse = ["Annie", "Jack", "Merlin", "Morgan Le Fay"]
const story = magicTreeHouse.map((character)=>{
    return  `<p> ${character} </p>`
}
)
console.log(story)
