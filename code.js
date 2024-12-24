let arr = [-14, -8 , -7, -5, 2, 4, 5, 17, 15] 

function reducer(a, b) {
    return a - b 
}

function sortedGivenArr(arr) {
    let newArr = []
    for (let item of arr) {
        let num = item * item 
        newArr.push(num);
    }
    let sortedNewArr = newArr.sort(reducer)
    return sortedNewArr
}
console.log(sortedGivenArr(arr))