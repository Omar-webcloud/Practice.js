const weight = 86; //kg
const height = 1.75; //meter

const bmi = weight / (height * height);

console.log("BMI: ", bmi.toFixed(2));

const result = bmi < 18 ? "You are underweight"
: bmi < 25 ? "Your weight is normal"
: bmi < 30 ? "You are overweight"
: result = ("You are obese");

console.log(result)