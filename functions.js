//declare a function (marco)
//takes in no arguements
//return (polo)
function marco(){
    return "polo"
}
console.log(marco())

// declare a function called greeting
// function takes 1 argument (name)
// function returns 'welcome + (name)'

function greeting(name){
    return "Welcome " + (name)
}

console.log(greeting("Brenda"))

//declare a function (oddOrEven)
// fucntion takes number as argument
//returns number wheather its odd or even

function oddOrEven(number){
    if(number % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}
    console.log(oddOrEven(16))

// declare a function called triple
// function takes a number as argument
// function returns result multiplied by 3

function triple(number){
    return (number) * 3
}
console.log(triple(4))

//declare a function (Mulitiply)
// Functions takes two arguements(numbers)
//returns result of (number)* another

function multiply(number1, number2){
    return number1 * number2
}
console.log(multiply(2,4))

// declare a function called divisibleBy
// function take 2 agrs which are numbers
// returns wheater first nr is evenly disible by the second

function divisibleBy(num1, num2){
    if (num1 % num2 === 0){
        return num1 + " is evenly divisible by " + num2
    }
}
console.log(divisibleBy(6,3))

//declare a function (greaterNum)
//takes two arg of num
//returns higher num

function greaterNum(number1, number2){
    if (number1 > number2){
    return number1
} else {
    return number2
}
}
console.log(greaterNum(1,8))

// function helloWorld
// takes 1 arg: a language code
// returns hello world for the given language

function helloWorld(langCode){
    if (langCode === "en"){
        return "Hello World"
    } else if (langCode === "es"){
        return "Hola Mundo"
    } else {
        (langCode === "ru")
            return "Privet Mir"
        }
}

console.log(helloWorld("en"))
console.log(helloWorld("es"))
console.log(helloWorld("ru"))

function assignGrade(score){
    if(score>=90){
        return "A"
    }else if (score<90 && score >=80) {
        return "B"

    }else if (score<80 && score >=70) {
            return "C"

    }else if (score<70 && score >=60) {
        return "D"
    }else(score<60)
        return "F"
}
console.log(assignGrade(67))

function pluralize(number, noun){
    if (number > 1){
        return (number + " " + noun+ "s")
} else {
    return (number + " " + noun)
}
}
console.log(pluralize(1, "dog"))
