let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
document.getElementById("first").innerHTML = `<p>1. sun of value 1 to 10 : ${sum}</p>`

}
console.log(sum);




let no = ""
for (let i = 2; i <= 20; i += 2) {
  if (i % 2 == 0) {
    no = no + i + "<br>";
    document.getElementById("second").innerHTML =
            "Even numbers from 1 to 20" + "<br>" + no;
  }
        
      }



let back = ""
for (let i = 10; i >= 1; i--) {
  back =back + i +" , "
        console.log(i);
        document.getElementById("third").innerHTML =`3.reverse no : <br> ${back}</p>`

      }


let userInput = prompt("Enter a number to generate its multiplication table:");


let number = parseInt(userInput);


if (!isNaN(number)) {

  console.log(`Multiplication table of ${number}:`);
  

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}