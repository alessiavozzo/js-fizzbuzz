const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz= "FizzBuzz";

const elementList = document.querySelector("ul")

// 1 to 100 in console.log

for (let i = 1; i <= 100; i++){
    //console.log(i);

    let listItem = document.createElement("li")
    //console.log(listItem);

    let numberChange = i;

    if(i % 3 === 0 && i % 5 === 0){
        numberChange = fizzBuzz;
        //console.log(numberChange);
    }

    else if(i % 3 === 0){
        numberChange = fizz;
        //console.log(numberChange);
    }

    else if(i % 5 === 0){
        numberChange = buzz;
        //console.log(numberChange);
    }
    
    elementList.append(listItem);
    listItem.append(numberChange)
}