console.log("1-20")
for(let i=1; i<=20; i++){
    console.log(i)
}

console.log("(1-20)*3")
for(let i=1; i<=20; i++){
    console.log(i*3)
}

console.log("arr* 4")
var numbers=[8,2,17,4,5,10,4,8,9,15]
for(let i =0; i< numbers.length; i++){
    console.log(numbers[i]*4)
}

console.log("even from 1-20, odd rest")
for(let i=1; i<=20; i++){
    if (i % 2 === 0){
        console.log(i)
    } else {
             console.log("ODD")

    }
}

console.log("reverse 1-10")
for(let i=10; i>0; i--){
    console.log(i)
}

console.log("capital letters")
var letters = ["l", "e", "a", "r", "n"]
    for(let i=0; i<letters.length; i++){
        console.log(letters[i].toUpperCase())
}
console.log("loops that log string even index")
var strings=["hi","yo","there","what","how", "two","are","where","you"]
    for(let i=0; i<strings.length; i++){
        if(i % 2 === 0){
        console.log(strings[i])
        }
    }

console.log("odd or even")
for(let i=0; i<=15; i++){
    if(i % 2 === 0){
        console.log((i)+ " is even")
    } else {
        console.log((i)+" is odd")
    }
}

console.log("fiz buzz")
for(let i=1; i<=100; i++){
    if(i % 3 == 0){
        console.log("fizz")
    } else if(i % 5 == 0) {
        console.log("buzz")
    } else {
        (i % 3 == 0 && i % 5 == 0)
        console.log("fizzbuzz")
    }
}
