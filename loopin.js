
// 1
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

for(let i =colors.length - 1; i >= 0; i--){
    // console.log(colors[i])
}

// 2

const numbers = [12, 98, 5, 41, 23, 78, 46];

for(i = 0 ; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
    //  console.log(numbers[i])
    }
}



// 3

var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let joined = '';

for(name of names){
  joined += name;
  
} 
// console.log(joined)


// 4 











// 5 

let og = [1, 2, 3];

let copy = [...og];
copy[0] = 99;

// console.log(copy);

// console.log(og);


// 6 

arr = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for(let student of arr){
    console.log(student.name + " scored " + student.marks)
}