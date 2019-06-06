var arr1=[3,9,15,4,10]
// 9 27 45 12 30
function mult3(arr1){
    var newArr =[]
    for(let i=0; i <arr1.length; i++){
    newArr.push(arr1[i] * 3)
    }
        return newArr
}
console.log(mult3(arr1))

var arr2 = [2, 7, 3, 5, 8, 10, 13]
function oddArray(arr2){
    var newArr2 = []
    for(let i=0; i<arr2.length; i++){
        if (arr2[i] % 2 !=0){
            newArr2.push(arr2[i])
        }
    }
    return newArr2
}
console.log(oddArray(arr2))
