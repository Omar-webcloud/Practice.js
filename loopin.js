
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