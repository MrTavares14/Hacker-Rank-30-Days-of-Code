/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let arraySize = a.length-1
    let swapCounter = 0
    while (arraySize > 0) {
        for (let i = 0; i < arraySize; i++) {
            if (a[i] > a[i + 1]) {
                let swapAux = a[i]
                a[i] = a[i + 1]
                a[i + 1] = swapAux
                swapCounter++
            }
        }
        arraySize --
    }
    console.log('Array is sorted in '+swapCounter+ ' swaps.')
    console.log('First Element: ' + a[0])
    console.log('Last Element: '+a[a.length-1])
}