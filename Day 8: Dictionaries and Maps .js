function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var size = parseInt(input[0])
    var phoneBook=[]

    for (var i = 0; i < size; i++) {
        var nameAndNumber = input[i+1]
        nameAndNumber = nameAndNumber.split(' ')
        phoneBook[nameAndNumber[0]] = nameAndNumber[1]
    }
    for (var j = size + 1; j < input.length; j++){
        var number = (phoneBook[input[j]])
        if (number !== undefined) {
            console.log(input[j] + '='+ number)
        } else {
            console.log('Not found')       
        }
    }
}