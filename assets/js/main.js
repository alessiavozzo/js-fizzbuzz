const fizz = "Fizz"
const buzz = "Buzz"
const fizzBuzz= "FizzBuzz"

// 1 to 100 in console.log

for (let i = 1; i <= 100; i++){
    console.log(i);

    let numberChange = i

    if(i % 3 === 0){
        numberChange = fizz
        console.log(numberChange);
    }

    else if(i % 5 === 0){
        numberChange = buzz
        console.log(numberChange);
    }

    else if(i % 3 === 0 && i % 5 === 0){
        numberChange = fizzBuzz
        console.log(numberChange);
    }
}