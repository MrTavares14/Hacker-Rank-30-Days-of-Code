function main() {
    let arr = Array(6)
    let maxSum = new Array()
    let maxsize = 0

    for(let i = 0; i <6 ; i++){
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10))
    }

    function sort(a,b){
        return a-b
    }
    
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            maxSum[maxsize] = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            maxsize++
        }
    }
    maxSum.sort(sort)
    console.log(maxSum[15])
}