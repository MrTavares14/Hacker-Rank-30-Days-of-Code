function processData(input) {
    //Enter your code here
    var array = input.split('\n')
    var even = ''
    var odd = ''

    for (var i = 1; i < array.length; i++){
        for (var j = 0; j < array[i].length; j++){
            if (j % 2 === 0) {
               even += array[i][j] 
            } else {
                odd += array[i][j]
            }
        }
        console.log(even + ' ' + odd)
        even = ''
        odd = ''
    }
}