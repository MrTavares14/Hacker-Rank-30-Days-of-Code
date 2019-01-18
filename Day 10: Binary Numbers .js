function main() {
    const n = parseInt(readLine(), 10);
    const binaryString = n.toString(2)
    var numberOfOne = 0
    var stringOfOnes = binaryString.split('0') 
    for (let i = 0; i < stringOfOnes.length; i++){
        if (numberOfOne < stringOfOnes[i].length) {
            numberOfOne = stringOfOnes[i].length
        }
    }
    console.log(numberOfOne)
}