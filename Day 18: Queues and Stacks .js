function Solution(){
    //Write your code here
    let stack =[]
    let queue = []

    this.pushCharacter = function (character) {
        stack.push(character)
    }

    this.enqueueCharacter = function (character) {
        queue.push(character)
    }

    this.popCharacter = function () {
        return stack.pop()
    }

    this.dequeueCharacter = function () {
        return queue.shift()
    }
}